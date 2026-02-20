// models/Score.js — Mongoose schema for Score
// ─────────────────────────────────────────────
// Stores the highest score per user. Uses a unique userId
// constraint so each user has exactly one score document.
// An index on highestScore supports efficient leaderboard queries.

const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "userId is required"],
      unique: true, // one document per user
    },
    highestScore: {
      type: Number,
      default: 0,
      min: [0, "Score cannot be negative"],
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

// Index for leaderboard sorting (descending)
scoreSchema.index({ highestScore: -1 });

module.exports = mongoose.model("Score", scoreSchema);
