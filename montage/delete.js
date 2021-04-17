const Jimp = require('jimp');

module.exports = class Delete {
    /**
     * Delete
     * @param {image} image
     */
    async getImage(image) {
        if(!image) throw new Error(`Tienes que proporcionar una imagen`);
        let bg = await Jimp.read(`${__dirname}/../../assets/delete.png`);
        image = await Jimp.read(image)
        image.resize(195, 195);
        bg.composite(image, 120, 135);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
}