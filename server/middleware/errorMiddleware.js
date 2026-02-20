// middleware/errorMiddleware.js — Global error handling middleware
// Provides centralized error handling for all routes (Separation of Concerns)

// -------------------------------------------------------------------
// notFound — Catches requests to undefined routes and forwards a 404
// -------------------------------------------------------------------
const notFound = (req, res, next) => {
  const error = new Error(`Not Found — ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// -------------------------------------------------------------------
// errorHandler — Final error handler; sends a structured JSON response
// In production, stack traces are hidden for security.
// -------------------------------------------------------------------
const errorHandler = (err, req, res, next) => {
  // If the response status is still 200, default to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message,
    // Only include the stack trace in development
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = { notFound, errorHandler };
