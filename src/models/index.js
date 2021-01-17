const { ErrorException } = require('./error-exception.model');
const { ErrorResponse } = require('./error-response.model');
const { Issue } = require('./issue.model');
const { IssueDetails } = require('./issue-details.model');

module.exports.models = {
  ErrorException,
  ErrorResponse,
  Issue,
  IssueDetails
};
