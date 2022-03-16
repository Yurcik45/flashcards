const chalk = require('chalk');

const log = console.log;
const infoLog = (text) => {
  return log(`[  ${chalk.yellow('INFO')}  ] ${text}`);
};

const successLog = (text) => {
  return log(`[   ${chalk.green('OK')}   ] ${text}`);
};

const errorLog = (text, err) => {
  return log(
	`[  ${chalk.red('ERR!')}  ] ${text.toLocaleUpperCase()} [  ${chalk.red('ERR!')}  ]
  ${err?.name &&  `name : ${err.name}` }
  ${err?.message &&  `message : ${err.message}` }
  ${err?.stack &&  `stack : ${err.stack}` }
[  ${chalk.red('ERR!')}  ] ${text.toLocaleUpperCase()} [  ${chalk.red('ERR!')}  ]`
	);
};

module.exports = {
  infoLog,
  successLog,
  errorLog
}
