const decodeBase64Image = (dataString) => {
    const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (matches.length !== 3) {
        throw new Error('Invalid base64 string.');
    }

    const type = matches[1];
    const buffer = Buffer.from(matches[2], 'base64');
    return buffer;
};

module.exports = { decodeBase64Image };
