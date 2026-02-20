// server.js — Express application entry point
// ─────────────────────────────────────────────
// Responsibilities (and nothing more):
//   1. Load environment variables
//   2. Connect to MongoDB
//   3. Register global middleware
//   4. Mount route groups
//   5. Attach error-handling middleware
//   6. Start the HTTP server

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// ── 1. Environment ──────────────────────────
dotenv.config();

// ── 2. Database ─────────────────────────────
connectDB();

// ── 3. App & Global Middleware ──────────────
const app = express();

// Enable CORS for all origins (tighten in production)
app.use(cors());

// Parse incoming JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));

// ── 4. Routes ───────────────────────────────
// Health-check / smoke-test route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Server Running",
    timestamp: new Date().toISOString(),
  });
});

// Auth routes   — register, login, profile
app.use("/api/auth", require("./routes/authRoutes"));

// Game routes   — start game, submit score, get game data
app.use("/api/game", require("./routes/gameRoutes"));

// Leaderboard   — rankings & user rank
app.use("/api/leaderboard", require("./routes/leaderboardRoutes"));

// ── 5. Error Handling ───────────────────────
// Catch 404s for any route that wasn't matched above
app.use(notFound);

// Final error handler — sends JSON error response
app.use(errorHandler);

// ── 6. Start Server ────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
  );
});
