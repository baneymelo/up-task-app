const express = require('express');
const router = express.Router();

const listController = require('../controllers/listController');

module.exports = function() {
    router.get('/', listController.home);
    router.get('/new-list', listController.listForm);
    router.post('/new-list', listController.newList);
    return router;
}