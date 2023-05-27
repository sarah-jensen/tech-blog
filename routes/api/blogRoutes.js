const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//routes for CRUD blog functions