const execa = require('execa');

let cmd = 'npm';

module.exports = function getInstallCmd() {
  if (cmd) {
    return cmd;
  }

  try {
    execa.sync('npm', '--version');
    cmd = 'npm';
  } catch (e) {
    cmd = 'yarn';
  }

  return cmd;
};
