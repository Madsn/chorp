module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/repo/tmp/chorp',
      rsyncFrom: 'c/repo/tmp/chorp',
      dirToCopy: 'chorp_angular/dist',
      deployTo: '/home/madsn/webapps/chorp_angular',
      repositoryUrl: 'https://github.com/Noptech/chorp.git',
      //ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      key: '/home/mikma/.ssh/id_rsa',
      shallowClone: true
    },
    staging: {
      servers: 'madsn@chorpangular.noptech.com'
    }
  });

  shipit.task('pwd', function () {
    console.log('printing working directory');
    var dir = shipit.config.workspace + '/chorp_angular';
    shipit.local('cd', {cwd: dir}).then(function() {
      shipit.local('npm run build', {cwd: dir}).then(function() {
        console.log('done building');
        return shipit.local('pwd');
      });
    });
  });
  shipit.on('fetched', function () {
    return shipit.local('pwd');

  });
};
