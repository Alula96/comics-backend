const exceptionType = require('../constants/exception-type.constants');
const statusCodes = require('../constants/status-code.constants');
const { models } = require('../models');
const { services } = require('../services');

const { ErrorResponse } = models;

const { getIssues, getIssue } = services;

/**
 * Function get the paginated issues list
 * @param {*} req request sent to the service
 * @param {*} res response that will be send
 */
const getPaginatedIssues = async (req, res) => {
  'use strict';
  const page = req.query.page ? req.query.page : 1;
  try {
    const results = await getIssues(page);
    res.send({
      page,
      results
    });
  } catch(e) {
    if (e.type === exceptionType.UNRESOLVED_ERROR) {
      const { error: { statusCode: statusCodeId } } = e;
      res.status(statusCodes[statusCodeId]).send(new ErrorResponse(statusCodes[statusCodeId], req.url));
    } else {
      res.status(500).send(new ErrorResponse(500, req.url, e.error));
    }
  }
};

/**
 * Function get a issue given an id
 * @param {*} req request sent to the service
 * @param {*} res response that will be send
 */
const getIssueDetails = async (req, res) => {
  'use strict';
  const id = req.params.uid;
  console.log({id});
  try {
    const result = await getIssue(id);
    res.send({
      result
    });
  } catch(e) {
    console.log({e});
    switch (e.type) {
      case exceptionType.MISSING_PARAMETER:
        res.status(400).send(new ErrorResponse(400, req.url, e.message)); 
        break;
      case exceptionType.NO_DATA_FOUND:
        res.status(404).send(new ErrorResponse(404, req.url, e.message));
        break;
      case exceptionType.UNRESOLVED_ERROR:
        const { error: { statusCode: statusCodeId } } = e;
        res.status(statusCodes[statusCodeId]).send(new ErrorResponse(statusCodes[statusCodeId], req.url));
        break;
      default:
        res.status(500).send(new ErrorResponse(500, req.url, e.error));
        break;
    }
  }
};


module.exports = {
  getPaginatedIssues,
  getIssueDetails
};
