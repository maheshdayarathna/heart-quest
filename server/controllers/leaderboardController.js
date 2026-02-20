// controllers/leaderboardController.js — Handles leaderboard requests
// ────────────────────────────────────────────────────────────────────
// Returns users sorted by highestScore descending.
// Uses the Score collection's descending index for efficiency.

const Score = require("../models/Score");

// ─────────────────────────────────────────────────────────
// GET /api/leaderboard   (public)
// ─────────────────────────────────────────────────────────
// Returns the top players sorted by highest score.
// Supports an optional ?limit query param (default 10, max 100).
const getLeaderboard = async (req, res, next) => {
  try {
    // Allow callers to request a custom page size (capped at 100)
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 10, 1), 100);

    const leaderboard = await Score.find()
      .sort({ highestScore: -1 })
      .limit(limit)
      .populate("userId", "name email") // include user name & email
      .lean(); // plain JS objects for faster serialisation

    // Reshape for cleaner API response
    const data = leaderboard.map((entry, index) => ({
      rank: index + 1,
      userId: entry.userId?._id,
      name: entry.userId?.name,
      email: entry.userId?.email,
      highestScore: entry.highestScore,
    }));

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getLeaderboard };
