const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");


const app = express();


// Security Middleware
app.use(helmet());


// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);


// Body Parser
app.use(express.json());


// Serve uploaded files
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);


// Routes
const pageRoutes = require("./routes/page.routes");
const authRoutes = require("./routes/auth.routes");
const settingsRoutes = require("./routes/settings.routes");
const mediaRoutes = require("./routes/media.routes");
const dashboardRoutes = require("./routes/dashboard.routes");


// API Routes

app.use(
  "/api/pages",
  pageRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/settings",
  settingsRoutes
);

app.use(
  "/api/media",
  mediaRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);


module.exports = app;