var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  username: process.env.VPS_USER || "",
  password: process.env.VPS_PASS || "", // optional, prompted if none given
  host: "chorpangular.noptech.com",
  port: 21,
  localRoot: "./dist",
  remoteRoot: "./webapps/chorp_angular",
  exclude: ['.git', '.idea', 'tmp/*']
};

ftpDeploy.deploy(config, function(err) {
  if (err) console.log(err);
  else console.log('finished');
});
