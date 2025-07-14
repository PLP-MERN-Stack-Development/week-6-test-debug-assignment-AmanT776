const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Dummy secret for JWT
const SECRET = 'testsecret';

function generateToken(user) {
  return jwt.sign({ _id: user._id, username: user.username }, SECRET);
}

async function authenticate(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).end();
  try {
    const payload = jwt.verify(auth.replace('Bearer ', ''), SECRET);
    req.user = await User.findById(payload._id);
    if (!req.user) return res.status(401).end();
    next();
  } catch (err) {
    res.status(401).end();
  }
}

module.exports = { generateToken, authenticate }; 