const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const PlaygroundPage = require('../../pages/playground_page');

Given('I\'m on the playground page for automation', async function () {
    this.playgroundPage = this.playgroundPage || new PlaygroundPage(this.driver); 
    this.playgroundPage = new PlaygroundPage(this.driver)
    await this.playgroundPage.navigateToPlaygroundPage();
});
When('I enter the my name {string}, email {string}, phone {string} and address {string}', async function (name, email, phone, address) {
    this.playgroundPage = this.playgroundPage || new PlaygroundPage(this.driver); 
    await this.playgroundPage.fillUserData(name, email, phone, address)
});

When('I select my gender {string} and choose my favorite day of the week {string}', async function (gender, day) {
    this.playgroundPage = this.playgroundPage || new PlaygroundPage(this.driver); 
    await this.playgroundPage.fillGender(gender);
    await this.playgroundPage.selectFavoriteDay(day);
});

Then('the information must be filled correctly', async function () {
    await delay(3000);
});

When ('I enter the country {string}, color {string} and pet {string}', async function (country, color, pet) {
    this.playgroundPage = this.playgroundPage || new PlaygroundPage(this.driver); 
    await this.playgroundPage.selectDrodpDownValue("country", country);
    await this.playgroundPage.selectDrodpDownValue("colors", color);
    await this.playgroundPage.selectDrodpDownValue("animals", pet);
});


function delay(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }