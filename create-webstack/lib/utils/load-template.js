const spawn = require('cross-spawn');
const exec = require('execa');
const Promise = require('promise');
const messages = require('../messages');
const output = require('./output');

const REPOGITORY_URL = 'https://codeload.github.com/wooritech/wooristack/tar.gz/master';

module.exports = function loadTemplate(opts) {
  const projectName = opts.projectName;
  const template = opts.template;
  const cmds = [
    `mkdir -p ${projectName}`,
    `curl ${REPOGITORY_URL} | tar -xz -C ${projectName} --strip=3 webstack-master/templates/${template}`
  ];

  const stopExampleSpinner = output.wait(`Downloading files for ${output.cmd(template)} template`);
  const cmdPromises = cmds.map(function (cmd) {
    return exec.shell(cmd);
  });

  return Promise.all(cmdPromises).then(function () {
    stopExampleSpinner();
    output.success(`Downloaded ${output.cmd(template)} files for ${output.cmd(projectName)}`);
  });
};
