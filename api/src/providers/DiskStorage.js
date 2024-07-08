const fs = require('fs'); // biblioteca do node para manipular arquivos (salvar, excluir, deletar, mover, renomear e etc)
const path = require('path');
const uploadConfig = require('../configs/upload');

class DiskStorage {
    async saveFile(file) {
        // função para mover arquivo da pasta temp para pasta de destino
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        );

        return file;
    }

    async deleteFile(file) {
        // função para deletar arquivo

        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try {
            await fs.promises.stat(filePath);
        } catch {
            return;
        }

        await fs.promises.unlink(filePath);
    }
}

module.exports = DiskStorage;
