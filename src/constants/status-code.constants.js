/**
 * Define COMIC VINE API status codes and it respective http status code equivalence
 */

module.exports = {
  1: {
    message: 'OK',
    'http-code': 200
  },
  100: {
    message: 'Invalid API Key',
    'http-code': 400
  }, 
  101: {
    message: 'Object Not Found',
    'http-code': 404
  },
  102: {
    message: 'Error in URL Format',
    'http-code': 400
  },
  103: {
    message: '\'jsonp\' format requires a \'json_callback\' argument',
    'http-code': 400
  }, 
  104: {
    message: 'Filter Error',
    'http-code': 400
  }, 
  105: {
    message: 'Subscriber only video is for subscribers only',
    'http-code': 403
  }
};
