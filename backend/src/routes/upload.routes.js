const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");
const upload = require("../config/multer");
const { uploadImage } = require("../controllers/upload.controller");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  uploadImage
);

module.exports = router;