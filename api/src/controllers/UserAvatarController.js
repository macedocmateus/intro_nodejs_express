const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const DiskStore = require('../providers/DiskStorage');

class UserAvatarController {
    async update(request, response) {
        const user_id = request.user.id;
        const avatarFilename = request.file.filename;

        const diskStorage = new DiskStore();

        const user = await knex('users').where({ id: user_id }).first;

        if (!user) {
            throw new AppError('Somente usuários autenticados podem mudar o avatar', 404);
        }

        if (user.avatar) {
            await diskStorage.deleteFile(user.avatar); // deleta a foto antiga se caso existir uma
        }

        const filename = await diskStorage.saveFile(avatarFilename); // subindo uma nova foto
        user.avatar = filename;

        await knex('users').update(user).where({ id: user_id });

        return response.json(user);
    }
}

module.exports = UserAvatarController;
