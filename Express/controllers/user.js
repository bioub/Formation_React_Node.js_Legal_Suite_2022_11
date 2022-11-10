const User = require('../models/user');

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.login = async (req, res, next) => {
  try {
    const token = await User.login(req.body);

    if (!token) {
      res.statusCode = 400;
      return res.json({
        msg: 'Wrong username/password',
      });
    }

    res.json({token});
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
 exports.list = async (req, res, next) => {
  try {
    const todos = await User.find({}, 'username active');
    res.json(todos);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.show = async (req, res, next) => {
  try {
    const todo = await User.findById(req.params.userId, 'username active');

    if (!todo) {
      req.notFoundReason = `User ${req.params.userId} not found`;
      return next();
    }

    res.json(todo);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.add = async (req, res, next) => {
  try {
    const todo = await User.create(req.body);
    res.statusCode = 201;
    res.json(todo);
  }
  catch (err) {
    next(err);
  }
};
