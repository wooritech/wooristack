const execa = require('execa');
const Promise = require('promise');
const messages = require('../messages');
const getInstallCmd = require('./get-install-cmd');
const output = require('./output');

module.exports = function install(opts) {
  const projectName = opts.projectName;
  const projectPath = opts.projectPath;

  const installCmd = 'npm';
  const installArgs = ['install'];

  // console.log(installCmd, installArgs);

  console.log(messages.installing(['react', 'next', 'typescript']));
  process.chdir(projectPath);

  return new Promise(function (resolve, reject) {
    const stopInstallSpinner = output.wait('Installing modules');

    execa(installCmd, installArgs).then(function () {
      stopInstallSpinner();
      output.success(`Installed dependencies for ${projectName}`);
      resolve();
    }).catch(function (err) {
      console.log(err);
      stopInstallSpinner();
      console.log(messages.installError(packages));
      return reject(new Error(`${installCmd} installation failed`));
    });
  });
};
