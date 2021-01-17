const express = require('express');

const { controllers } = require('../controllers');

const router = express.Router();

router.get('/comics', controllers.getPaginatedIssues);

router.get('/comics/:uid', controllers.getIssueDetails);

module.exports = router;