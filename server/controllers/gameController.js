// controllers/gameController.js — Handles game-related requests
// ──────────────────────────────────────────────────────────────
// Thin controller: validates input, delegates to Mongoose,
// and returns a consistent JSON response. (High Cohesion)

const Score = require("../models/Score");
const User = require("../models/User");

// ─────────────────────────────────────────────────────────
// POST /api/game/save-score   (protected)
// ─────────────────────────────────────────────────────────
// Accepts { score } in the request body.
// Persists the score only if it is higher than the user's
// current highest score (atomic upsert using $max).
// Also keeps User.highestScore in sync.
const saveScore = async (req, res, next) => {
  try {
    const { score } = req.body;
    const userId = req.user._id;

    // --- Validation ---
    if (score === undefined || score === null) {
      res.status(400);
      return next(new Error("Please provide a score"));
    }

    const numericScore = Number(score);
    if (Number.isNaN(numericScore) || numericScore < 0) {
      res.status(400);
      return next(new Error("Score must be a non-negative number"));
    }

    // --- Atomic upsert: update only if new score > existing ---
    const updatedScore = await Score.findOneAndUpdate(
      { userId },
      { $max: { highestScore: numericScore } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // Keep User.highestScore in sync
    await User.findByIdAndUpdate(userId, {
      $max: { highestScore: numericScore },
    });

    // Use 201 when a new document was created, 200 otherwise
    const statusCode = updatedScore.createdAt.getTime() === updatedScore.updatedAt.getTime()
      ? 201
      : 200;

    res.status(statusCode).json({
      success: true,
      data: {
        userId: updatedScore.userId,
        highestScore: updatedScore.highestScore,
        updatedAt: updatedScore.updatedAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { saveScore };
