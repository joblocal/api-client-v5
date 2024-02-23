export default {
  name: 'errors-middleware',
  error(payload) {
    const {
      code,
      message,
      config: { url },
      response: { status, data: { message: responseMessage } },
    } = payload;
    return {
      code, message, url, status, responseMessage,
    };
  },
};
