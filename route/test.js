var net = require('net');
var hosts = [
  ['db-pg', 5432],
  ['db-pg', 80],
];
hosts.forEach(function (item) {
  var sock = new net.Socket();
  sock.setTimeout(2500);
  sock
    .on('connect', function () {
      console.log(item[0] + ':' + item[1] + ' is up.');
      sock.destroy();
    })
    .on('error', function (e) {
      console.log(item[0] + ':' + item[1] + ' is down: ' + e.message);
    })
    .on('timeout', function (e) {
      console.log(item[0] + ':' + item[1] + ' is down: timeout');
    })
    .connect(item[1], item[0]);
});
