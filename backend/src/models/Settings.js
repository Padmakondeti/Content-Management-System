const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: "",
    },
    siteDescription: {
      type: String,
      default: "",
    },
    contactEmail: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    footerText: {
      type: String,
      default: "",
    },
    logo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Settings", settingsSchema);