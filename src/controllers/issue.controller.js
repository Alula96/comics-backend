const exceptionType = require('../constants/exception-type.constants');
const statusCodes = require('../constants/status-code.constants');
const { models } = require('../models');
const { services } = require('../services');

const { ErrorResponse } = models;

const { getIssues } = services;

/**
 * Función para obtener la lista de items o productos
 * @param {*} req la solicitud enviada al servicio
 * @param {*} res la respuesta que se enviará por parte del servicio
 */
const getPaginatedIssues = async (req, res) => {
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

module.exports = {
  getPaginatedIssues
};
