const express = require('express');
const { getText, getBboxes } = require('../controllers/ocrController');
const router = express.Router();

router.post('/get-text', getText);
router.post('/get-bboxes', getBboxes);

module.exports = router;
