const restify = require("restify");
const axios = require("axios");
const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
  origins: ["*"]
});

const server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);

// http://localhost:3030/api?i=onions,garlic&q=omelet&p=3

server.get("/api", async (req, res, next) => {
  const searchUrl = "http://www.recipepuppy.com/api?" + req.query();
  const result = await axios.get(searchUrl);
  console.log("Search: http://www.recipepuppy.com/api?" + req.query());
  res.send(result.data);
  next();
});

server.listen("3030", () => {
  console.log("Server listening in port 3030");
});

const https = require("https");
