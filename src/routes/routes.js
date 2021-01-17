const express = require('express');

const { controllers } = require('../controllers');

const router = express.Router();

router.get('/comics', controllers.getPaginatedIssues);

module.exports = router;