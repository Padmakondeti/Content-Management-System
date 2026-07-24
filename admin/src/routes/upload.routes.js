const express = require("express");
const upload = require("../middleware/upload");
const { uploadImage } = require("../controllers/upload.controller");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, upload.single("image"), uploadImage);

module.exports = router;