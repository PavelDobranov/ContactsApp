module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/views/:area/:template', function (req, res) {
    res.render('../../public/app/views/' + req.params.area + "/" + req.params.template)
  });
};
