// routes/gameRoutes.js — Game route definitions
// ────────────────────────────────────────────────
// Maps HTTP verbs + paths to controller functions.
// This file contains ZERO logic — only wiring. (Low Coupling)

const express = require("express");
const router = express.Router();
const { saveScore } = require("../controllers/gameController");
const { protect } = require("../middleware/authMiddleware");

// Protected routes (require valid JWT)
router.post("/save-score", protect, saveScore);

module.exports = router;
