module.exports = function (req, res, next) {
    // Adicione aqui os middlewares personalizados
    res.setHeader('X-Custom-Header', 'Hello from middleware!');
    next();
  };
  