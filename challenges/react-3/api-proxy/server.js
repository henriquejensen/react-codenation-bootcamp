// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const routes = {
  '/api/?i=:i': '/results?ingredients_like=:i',
  '/api/?q=:q': '/results?q=:q',
  '/api/?p=:p': '/results?_page=:p'
};

const rules = jsonServer.rewriter(routes);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(rules);
server.use(router);

server.listen(3030, () => {
  console.log('JSON Server is running');
});

const getQueryStringParameters = url => {
  if (url) {
    if (url.split('?').length > 0) {
      query = url.split('?')[1];
    }
  } else {
    url = window.location.href;
    query = window.location.search.substring(1);
  }
  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [key, value] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, {});
};

router.render = (req, res) => {
  const params = getQueryStringParameters(req.originalUrl);
  const ingredients = params.i ? params.i.split(',') : false;

  if (ingredients.length > 1) {
    res.send(
      `ERROR: Comma separated values are not supported by this mock api.`
    );
  } else {
    res.jsonp(res.locals.data);
  }
};
