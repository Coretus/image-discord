const Canvas = require('canvas');

module.exports = class Facepalm {
    /**
     * Facepalm
     * @param {image} image
     */
    async getImage(image) {
        if(!image) throw new Error(`Tienes que proporcionar una imagen`);
        let canvas = Canvas.createCanvas(632, 357);
        let ctx = canvas.getContext(`2d`);
        ctx.fillStyle = `black`;
        ctx.fillRect(0, 0, 632, 357);
        let avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 199, 112, 235, 235);
        let layer = await Canvas.loadImage(`${__dirname}/../..assents/facepalm.png`);
        ctx.drawImage(layer, 0, 0, 632, 357);
        return canvas.toBuffer();
    }
}