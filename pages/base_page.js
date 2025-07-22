const { By, until } = require('selenium-webdriver');

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  /**
   * Navega a una URL específica.
   * @param {string} url - La URL a la que se debe navegar.
   */
  async goToUrl(url) {
    await this.driver.get(url);
  }

  /**
   * Espera a que un elemento esté presente en el DOM.
   * @param {By} locator - El locator del elemento.
   * @param {number} timeout - El tiempo máximo en milisegundos para esperar.
   * @returns {Promise<WebElement>} El elemento web encontrado.
   */
  async waitForElementLocated(locator, timeout = 10000) {
    return await this.driver.wait(until.elementLocated(locator), timeout, `Element not found in  ${timeout}ms: ${locator.toString()}`);
  }

  /**
   * Espera a que un elemento sea visible en la página.
   * @param {By} locator - El locator del elemento.
   * @param {number} timeout - El tiempo máximo en milisegundos para esperar.
   * @returns {Promise<WebElement>} El elemento web visible.
   */
  async waitForElementVisible(locator, timeout = 10000) {
    const element = await this.waitForElementLocated(locator, timeout);
    return await this.driver.wait(until.elementIsVisible(element), timeout, `Element not visible in ${timeout}ms: ${locator.toString()}`);
  }

  /**
   * Espera a que un elemento sea clicable (visible y habilitado).
   * @param {By} locator - El locator del elemento.
   * @param {number} timeout - El tiempo máximo en milisegundos para esperar.
   * @returns {Promise<WebElement>} El elemento web clicable.
   */
  async waitForElementClickable(locator, timeout = 10000) {
    const element = await this.waitForElementLocated(locator, timeout);
    return await this.driver.wait(until.elementIsEnabled(element), timeout, `Element not enabled in ${timeout}ms: ${locator.toString()}`);
  }

  /**
   * Escribe texto en un campo de entrada.
   * @param {By} locator - El locator del campo de entrada.
   * @param {string} text - El texto a escribir.
   */
  async type(locator, text) {
    const element = await this.waitForElementVisible(locator);
    await element.sendKeys(text);
  }

  /**
   * Hace clic en un elemento.
   * @param {By} locator - El locator del elemento a hacer clic.
   */
  async click(locator) {
    const element = await this.waitForElementClickable(locator);
    await element.click();
  }

  /**
   * Obtiene el texto de un elemento.
   * @param {By} locator - El locator del elemento.
   * @returns {Promise<string>} El texto del elemento.
   */
  async getText(locator) {
    const element = await this.waitForElementVisible(locator);
    return await element.getText();
  }

  /**
   * Verifica si un elemento está presente en el DOM (no necesariamente visible).
   * @param {By} locator - El locator del elemento.
   * @returns {Promise<boolean>} True si el elemento está presente, false de lo contrario.
   */
  async isElementPresent(locator) {
    try {
      await this.driver.findElement(locator);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Verifica si un elemento es visible en la página.
   * @param {By} locator - El locator del elemento.
   * @returns {Promise<boolean>} True si el elemento es visible, false de lo contrario.
   */
  async isElementDisplayed(locator) {
    try {
      const element = await this.driver.findElement(locator);
      return await element.isDisplayed();
    } catch (error) {
      return false;
    }
  }

  /**
   * Espera a que la URL actual contenga un texto específico.
   * @param {string} substring - El texto que se espera que contenga la URL.
   * @param {number} timeout - El tiempo máximo en milisegundos para esperar.
   */
  async waitForUrlContains(substring, timeout = 10000) {
    await this.driver.wait(until.urlContains(substring), timeout, `URL does not contains "${substring}" in ${timeout}ms.`);
  }

  // Puedes añadir más métodos comunes aquí, como tomar capturas de pantalla, etc.
}

module.exports = BasePage;