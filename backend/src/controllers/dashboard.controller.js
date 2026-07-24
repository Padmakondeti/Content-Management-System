const Page = require("../models/Page");
const Media = require("../models/Media");

const getDashboardStats = async (req, res) => {
  try {
    const totalPages = await Page.countDocuments();

    const publishedPages = await Page.countDocuments({
      status: "Published",
    });

    const draftPages = await Page.countDocuments({
      status: "Draft",
    });

    const totalMedia = await Media.countDocuments();

    const recentPages = await Page.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      success: true,
      stats: {
        totalPages,
        publishedPages,
        draftPages,
        totalMedia,
      },
      recentPages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};