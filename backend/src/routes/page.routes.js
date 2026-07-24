const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createPage,
  getPages,
  getPage,
  updatePage,
  deletePage,
} = require("../controllers/page.controller");

// Create Page
router.post(
  "/",
  authMiddleware,
  createPage
);

// Get All Pages
router.get(
  "/",
  authMiddleware,
  getPages
);

// Get Single Page
router.get(
  "/:id",
  authMiddleware,
  getPage
);

// Update Page
router.put(
  "/:id",
  authMiddleware,
  updatePage
);

// Delete Page
router.delete(
  "/:id",
  authMiddleware,
  deletePage
);

module.exports = router;