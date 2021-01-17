const errorMessage = require('../constants/error-message.constants');

/**
 * The model used to standardize service error response.
 */
const ErrorResponse = class { 

  /**
   * Model's constructor.
   * @param {*} status Http status code.
   * @param {*} url Url requested.
   * @param {*} data Aditional data.
   */
  constructor(status, url, data) {
    this.ok = false;
    this.status = status;
    if (!!status) {
      this.message = errorMessage[status].message;
    }
    this.url = url;
    this.data = data;
  }
};

module.exports = {
  ErrorResponse
};