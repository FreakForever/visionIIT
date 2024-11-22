# Tesseract OCR API

This repository provides a server application built with **[Node.js](https://nodejs.org/)** that leverages **Tesseract OCR (Version 5)** to extract text and bounding boxes from images. The API adheres strictly to the provided specifications and offers two endpoints:

- **`/api/get-text`**: Extracts the entire text from an image.
- **`/api/get-bboxes`**: Extracts bounding boxes for specified types (word, line, paragraph, block, or page).

---

## Features

- **Text Extraction**: Extract text from images using Tesseract OCR.
- **Bounding Box Retrieval**: Retrieve bounding boxes for specific structural elements in an image.
- **Error Handling**: Comprehensive error handling for invalid inputs, base64 strings, and unsupported bounding box types.
- **Code Quality**: Modular, clean, and well-documented code.

---

## API Endpoints

### 1. `/api/get-text`

This endpoint extracts text from a valid Base64-encoded image.

#### Request

- **Method**: POST
- **Headers**: 
  - `Content-Type: application/json`
- **Body**: 
  ```json
  {
    "base64_image": "VALID_BASE64_ENCODED_IMAGE_STRING"
  }
-**Response**:
```json
  {
  "success": true,
  "result": {
    "text": "Extracted text from the image."
  }
}
