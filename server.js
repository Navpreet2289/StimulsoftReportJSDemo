var http = require('http');
var port = process.env.port || 1337;
var report = require('./vinreport/vinreport.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    report.printSimpleReport();
    report.printVINReport();
    res.end('Hello World\n Please check folder for VinReport.pdf file.');
}).listen(port);