const path = require('path');
const fs = require('fs');
const output = require('./utils/output');
const copyDir = require('./utils/copy-dir');
const install = require('./utils/install');
const loadTemplate = require('./utils/load-template');
const messages = require('./messages');

module.exports = function createWebstack(opts) {
  const projectName = opts.projectName;

  if (!projectName) {
    console.log(messages.missingProjectName());
    process.exit(1);
  }

  if (fs.existsSync(projectName)) {
    console.log(messages.alreadyExists(projectName));
    process.exit(1);
  }

  opts.projectPath = process.cwd() + '/' + projectName;
  // set default template
  if (!opts.template) opts.template = 'basic';

  loadTemplate({
    projectName: projectName,
    template: opts.template
  }).then(installWithMessageFactory(opts));
};

function installWithMessageFactory(opts) {
  const projectName = opts.projectName;
  const projectPath = opts.projectPath;

  return function installWithMessage() {
    return install({
      projectName: projectName,
      projectPath: projectPath,
    }).then(function () {
      console.log(messages.start(projectName));
    }).catch(function (err) {
      throw err;
    });
  };
}
