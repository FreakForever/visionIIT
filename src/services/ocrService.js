const tesseract = require('tesseract.js');
const { decodeBase64Image } = require('../utils/imageUtils');

const extractText = async (base64_image) => {
    const imageBuffer = decodeBase64Image(base64_image);
    
    try {
        const { data: { text } } = await tesseract.recognize(
            imageBuffer,
            'eng',  // Language, you can change it
            {
                logger: (m) => console.log(m),  // Log progress
            }
        );
        return text;
    } catch (error) {
        throw new Error('Error extracting text from image: ' + error.message);
    }
};

const extractBboxes = async (base64_image, bbox_type) => {
    const imageBuffer = decodeBase64Image(base64_image);
    
    try {
        const { data: { text, blocks } } = await tesseract.recognize(
            imageBuffer,
            'eng',
            {
                logger: (m) => console.log(m),
                tessjs_create_pdf: '1'
            }
        );
        
        // Extracting bounding boxes based on bbox_type
        let bboxes = blocks.map(block => block.text);
        
        return bboxes;
    } catch (error) {
        throw new Error('Error extracting bounding boxes: ' + error.message);
    }
};

module.exports = { extractText, extractBboxes };
