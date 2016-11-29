module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/repo/tmp/chorp',
      rsyncFrom: 'c/repo/tmp/chorp',
      dirToCopy: 'chorp_angular/dist',
      deployTo: '/home/madsn/webapps/chorp_angular_deployment',
      repositoryUrl: 'https://github.com/Noptech/chorp.git',
      //ignores: ['.git', 'node_modules'],
      branch: 'Todo-list',
      rsync: ['--del'],
      keepReleases: 2,
      key: '~/.ssh/id_rsa',
      shallowClone: true
    },
    staging: {
      servers: 'madsn@chorpangular.noptech.com'
    }
  });

  shipit.task('build', function () {
    console.log('building...');
    var dir = shipit.config.workspace + '/chorp_angular';
    shipit.local('cd', {cwd: dir}).then(function() {
      console.log('done building');
    });
  });

  shipit.on('fetched', function () {
    return shipit.start('build');
  });
};
