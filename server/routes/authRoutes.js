// routes/authRoutes.js — Authentication route definitions
// ─────────────────────────────────────────────────────────
// Maps HTTP verbs + paths to controller functions.
// This file contains ZERO logic — only wiring. (Low Coupling)

const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes (require valid JWT)
router.get("/profile", protect, getProfile);

module.exports = router;
