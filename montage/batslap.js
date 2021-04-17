const jimp = require('Jimp');

module.exports = class Batslap {
    /**
     * Batslap
     * @param {image} image1
     * @param {image} image2
     */
    async getImage(image1, image2) {
        if(!image1) throw new Error(`Tienes que proporcionar el avatar numero 1`);
        if(!image2) throw new Error(`Tienes que proporcionar el avatar numero 2`);
        let base = await jimp.read(`${__dirname}/../..assents/batslap.png`);
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        base.resize(1000, 500);
        image1.resize(220, 220);
        image2.resize(200, 200);
        base.composite(image2, 580, 260);
        base.composite(image1, 350, 70);
        let raw;
        base.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
}
};