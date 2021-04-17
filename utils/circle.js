const Jimp = require(`Jimp`);

module.exports = class Circle {
    /**
     * Circle
     * @param {image} image
     */
    async getImage(image) {
        if(!image) throw new Error(`ERR Tienes que proporcionar una imagen`);
        image = await Jimp.read(image);
        image.resize(480, 480);
        image.circler();
        let raw;
        image.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
}