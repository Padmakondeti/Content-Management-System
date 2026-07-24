const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const upload = require("../middleware/upload.middleware");

const {
  uploadMedia,
  getAllMedia,
  deleteMedia,
} = require("../controllers/media.controller");

// Get all uploaded images
router.get(
  "/",
  authMiddleware,
  getAllMedia
);

// Upload image
router.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  uploadMedia
);

// Delete image
router.delete(
  "/:id",
  authMiddleware,
  deleteMedia
);

module.exports = router;