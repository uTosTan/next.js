"use strict";

var _server = require("react-dom/server");

process.on('message', function (message) {
  var result = (0, _server.renderToString)(message.app);
  process.send(result);
});