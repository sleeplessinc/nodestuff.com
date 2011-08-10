

var jade = require("jade");
var jsond = require("jsond");
require("log5"); logLevel = 5;

function message(msg, cb) {
}

jsond.createServer(message).listen(3003)


