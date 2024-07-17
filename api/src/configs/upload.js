const path = require('path');
const multer = require('multer'); // multer é biblioteca para fazer uploads
const crypto = require('crypto'); // função hash para criar arquivo com nome único

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp'); // é onde a imagem chega
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, 'uploads'); // é onde a imagem vai ficar ou seja, destino

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex'); // usando crypto para não criar arquivo de mesmo nome, a função vai sobrescrever se caso isso aconteça

            const fileName = `${fileHash}-${file.originalname}`; // evitar nomes iguais

            return callback(null, fileName);
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER,
};
