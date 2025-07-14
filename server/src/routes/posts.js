const express = require('express');
const Post = require('../models/Post');
const { authenticate } = require('../utils/auth');
const router = express.Router();

// Create post
router.post('/', authenticate, async (req, res, next) => {
  try {
    const { title, content, category } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const post = await Post.create({
      title,
      content,
      category,
      author: req.user._id,
      slug: title.toLowerCase().replace(/\s+/g, '-')
    });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

// Get all posts
router.get('/', async (req, res, next) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    const filter = category ? { category } : {};
    const posts = await Post.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// Get post by ID
router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).end();
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// Update post
router.put('/:id', authenticate, async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).end();
    if (post.author.toString() !== req.user._id.toString()) return res.status(403).end();
    Object.assign(post, req.body);
    await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// Delete post
router.delete('/:id', authenticate, async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).end();
    if (post.author.toString() !== req.user._id.toString()) return res.status(403).end();
    await post.deleteOne();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router; 