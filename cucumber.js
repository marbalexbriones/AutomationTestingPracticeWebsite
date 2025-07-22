module.exports = {
  default: `features/**/*.feature --require features/step_definitions/**/*.js --require features/support/**/*.js --format progress --format html:reports/cucumber-report.html`,
};