const axios = require('axios');
const comicvine = require('../constants/comicvine.constants');
const exceptionType = require('../constants/exception-type.constants');
const { models } = require('../models');

const { ErrorException, Issue, IssueDetails } = models;

/**
 * Get all issues from COMICVINE API
 * @param {*} page issues page location 
 * @returns an issues model list from response API
 */
const getIssues = async (page = 1, limit = comicvine.LIMIT, filter = null) => {
  const offset = comicvine.LIMIT*(page-1);
  const url = `${comicvine.API_URL}/issues/?format=json&api_key=${comicvine.API_KEY}&offset=${offset}&limit=${limit}`
              .concat(filter ? filter : '');
  let issues = [];
  await axios.get(url)
    .then((response) => {
      if (response.data && response.data.status_code === 1) {
        issues = response.data.results.map(item => new Issue(item));
      } else {
        throw new ErrorException(exceptionType.UNRESOLVED_ERROR, 'Opss, an error just occurred.', { statusCode: response.data.status_code });
      }
    }).catch((error) => {
      throw new ErrorException(exceptionType.UNKNOWN_ERROR, 'Internal Server Error.', error.response.data);
    });
  return issues;
};

/**
 * Get an issues from COMICVINE API given an id
 * @param {*} id issues page location 
 * @returns an issue model from response API
 */
const getIssue = async (id) => {
  'use strict';
  if (id === null || id === undefined) {
    throw new ErrorException(errorExceptionType.MISSING_PARAMETER, 'Issue \'s id is required.');
  }
  // You must to get first a list of issues from getIssues method
  const issueList = await getIssues(1, 1, `id:${id}`);
  if (issueList.length === 0) {
    throw new ErrorException(exceptionType.NO_DATA_FOUND, 'No issue found.', { statusCode: response.data.status_code });
  }
  
  let issue;
  await axios.get(`${issueList[0].detailUrl}?format=json&api_key=${comicvine.API_KEY}`)
    .then((response) => {
      console.log(response.data);
      if (response.data && response.data.status_code === 1) {
        if (response.data.results) {
          issue = new IssueDetails(response.data.results);
        } else {
          throw new ErrorException(exceptionType.NO_DATA_FOUND, 'No issue found.', { statusCode: response.data.status_code });
        }
      } else {
        throw new ErrorException(exceptionType.UNRESOLVED_ERROR, 'Opss, an error just occurred.', { statusCode: response.data.status_code });
      }
    }).catch((error) => {
      console.log({error});
      throw new ErrorException(exceptionType.UNKNOWN_ERROR, 'Internal Server Error.', error.response.data);
    });
  return issue;
};

module.exports = {
  getIssues,
  getIssue
};