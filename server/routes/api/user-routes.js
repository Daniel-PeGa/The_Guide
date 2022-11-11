const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    login
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

