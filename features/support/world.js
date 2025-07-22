const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    // Puedes añadir propiedades o métodos aquí que necesites compartir entre tus pasos
    this.driver = null; // El controlador de Selenium se inicializará en hooks.js
  }
}

setWorldConstructor(CustomWorld);