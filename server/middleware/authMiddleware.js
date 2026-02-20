// middleware/authMiddleware.js — JWT authentication guard
// ────────────────────────────────────────────────────────
// Extracts the Bearer token from the Authorization header,
// verifies it, and attaches the decoded user to req.user.
// Keeps route handlers free of auth logic (Low Coupling).

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  // Check for Bearer token in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // No token found
  if (!token) {
    res.status(401);
    return next(new Error("Not authorized — no token provided"));
  }

  try {
    // Verify token and decode payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request (exclude password)
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      res.status(401);
      return next(new Error("Not authorized — user no longer exists"));
    }

    next();
  } catch (error) {
    res.status(401);
    return next(new Error("Not authorized — token invalid or expired"));
  }
};

module.exports = { protect };
