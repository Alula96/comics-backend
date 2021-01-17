/**
 * The model used to manage code errors.
 */
const ErrorException = class { 

  /**
   * Model's constructor.
   * @param {*} type Exception type, defined in exception-type file.
   * @param {*} message Additional message to describe error.
   */
  constructor(type, message, error) {
    this.type = type;
    this.message = message;
    this.error = error;
  } 
};

module.exports = {
  ErrorException
};