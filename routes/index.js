const express = require('express');
const router = express.Router();

const listController = require('../controllers/listController');

module.exports = function() {
    router.get('/', listController.home);

    return router;
}