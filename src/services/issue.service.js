const axios = require('axios');
const comicvine = require('../constants/comicvine.constants');
const exceptionType = require('../constants/exception-type.constants');
const { models } = require('../models');

const { ErrorException, Issue } = models;

/**
 * Get all issues from COMICVINE API
 * @param {*} page issues page location 
 * @returns a issues model list from response API
 */
const getIssues = async (page = 1) => {
  const offset = comicvine.LIMIT*(page-1);
  let issues = [];
  await axios.get(`${comicvine.API_URL}/issues/?format=json&api_key=${comicvine.API_KEY}&offset=${offset}&limit=${comicvine.LIMIT}`)
    .then((response) => {
      if (response.data && response.data.status_code === 1) {
        issues = response.data.results.map(item => new Issue(item));
      } else {
        throw new ErrorException(exceptionType.UNRESOLVED_ERROR, 'La petición no ha sido exitosa.', { statusCode: response.data.status_code });
      }
    }).catch((error) => {
      throw new ErrorException(exceptionType.UNKNOWN_ERROR, 'Ha ocurrido un error desconocido.', error.response.data);
    });
  return issues;
};

module.exports = {
  getIssues
};