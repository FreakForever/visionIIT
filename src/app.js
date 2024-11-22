const express = require('express');
const bodyParser = require('body-parser');
const ocrRoutes = require('./routes/ocrRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb' })); // Handle large base64 images
app.use('/api', ocrRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
