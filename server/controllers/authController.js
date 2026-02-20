// controllers/authController.js — Authentication request handlers
// ────────────────────────────────────────────────────────────────
// Each handler validates input, delegates to the User model,
// and returns a consistent JSON response. No business logic
// beyond orchestration lives here. (High Cohesion)

const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ── Helper: generate a signed JWT ───────────────────────
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "30d",
  });
};

// ─────────────────────────────────────────────────────────
// POST /api/auth/register
// ─────────────────────────────────────────────────────────
const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // --- Validation ---
    if (!name || !email || !password) {
      res.status(400);
      return next(new Error("Please provide name, email, and password"));
    }

    // Check for duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400);
      return next(new Error("A user with this email already exists"));
    }

    // Create user (password is hashed automatically via pre-save hook)
    const user = await User.create({ name, email, password });

    // Respond with user data + token
    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        highestScore: user.highestScore,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────────────────
// POST /api/auth/login
// ─────────────────────────────────────────────────────────
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // --- Validation ---
    if (!email || !password) {
      res.status(400);
      return next(new Error("Please provide email and password"));
    }

    // Find user and explicitly include the password field
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(401);
      return next(new Error("Invalid email or password"));
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401);
      return next(new Error("Invalid email or password"));
    }

    // Respond with user data + token
    res.status(200).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        highestScore: user.highestScore,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────────────────
// GET /api/auth/profile   (protected)
// ─────────────────────────────────────────────────────────
const getProfile = async (req, res, next) => {
  try {
    // req.user is set by the authMiddleware
    const user = await User.findById(req.user._id);

    if (!user) {
      res.status(404);
      return next(new Error("User not found"));
    }

    res.status(200).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        highestScore: user.highestScore,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getProfile };
