const { extractText, extractBboxes } = require('../services/ocrService');

const getText = async (req, res) => {
    try {
        const { base64_image } = req.body;
        if (!base64_image) {
            return res.status(400).json({ success: false, error: { message: 'Base64 image is required.' } });
        }
        
        const text = await extractText(base64_image);
        res.json({ success: true, result: { text } });
    } catch (error) {
        res.status(500).json({ success: false, error: { message: error.message } });
    }
};

const getBboxes = async (req, res) => {
    try {
        const { base64_image, bbox_type } = req.body;
        if (!base64_image || !bbox_type) {
            return res.status(400).json({ success: false, error: { message: 'Base64 image and bbox_type are required.' } });
        }

        const validBboxTypes = ['word', 'line', 'paragraph', 'block', 'page'];
        if (!validBboxTypes.includes(bbox_type)) {
            return res.status(400).json({ success: false, error: { message: 'Invalid bbox_type.' } });
        }

        const bboxes = await extractBboxes(base64_image, bbox_type);
        res.json({ success: true, result: { bboxes } });
    } catch (error) {
        res.status(500).json({ success: false, error: { message: error.message } });
    }
};

module.exports = { getText, getBboxes };
