// routes/leaderboardRoutes.js — Leaderboard route definitions
// ─────────────────────────────────────────────────────────────
// Maps HTTP verbs + paths to controller functions.
// This file contains ZERO logic — only wiring. (Low Coupling)

const express = require("express");
const router = express.Router();
const { getLeaderboard } = require("../controllers/leaderboardController");

// Public routes (no auth required)
router.get("/", getLeaderboard);

module.exports = router;
