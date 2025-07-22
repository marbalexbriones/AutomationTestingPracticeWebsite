const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Hook para inicializar el navegador antes de cada escenario
Before(async function () {
  let options = new chrome.Options();
  // options.addArguments('--headless');
  // options.addArguments('--disable-gpu'); // Necesario para headless en algunos sistemas
  // options.addArguments('--no-sandbox'); // Necesario para CI/CD

  this.driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
});

// Hook para cerrar el navegador después de cada escenario
After(async function () {
  if (this.driver) {
    await this.driver.quit();
  }
});
