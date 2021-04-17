const Jimp = require('Jimp');

module.exports = class Beautiful {
    /**
     * Beautiful
     * @param {image} image
     */
    async getImage(image) {
        if(!image) throw new Error(`Tienes proporcionar una imagen`);
        let base = await Jimp.read(`${__dirname}/../../assets/beautiful.png`)
        let img = await Jimp.read(image);
        img.resize(84, 95);
        base.composite(img, 258, 28);
        base.composite(img, 258, 229);
        let raw;
        base.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
}