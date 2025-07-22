const { By } = require('selenium-webdriver');
const BasePage = require('./base_page');

class PlaygroundPage extends BasePage {

    constructor(driver){
        super(driver); // Llama al constructor de la clase padre (BasePage)
        this.url = 'https://testautomationpractice.blogspot.com/';

        //Locators
        this.nameInput = By.id('name');
        this.emailInput = By.id('email');
        this.phoneInput = By.id('phone');
        this.addressInput = By.id('textarea');
        this.maleGender = By.id('male');
        this.femaleGender = By.id('female');
        this.countryDropDown = By.id('country');

    }
    
    async navigateToPlaygroundPage() {
        await this.goToUrl(this.url);
        await this.waitForElementVisible(this.nameInput);
    }

    async fillUserData(name, email, phone, address) {
        await this.type(this.nameInput, name);
        await this.type(this.emailInput, email);
        await this.type(this.phoneInput, phone);
        await this.type(this.addressInput, address);
    }

    async fillGender(gender){
        if (gender == 'Male')
            await this.click(this.maleGender);
        else if (gender == "Female")
            await this.click(this.femaleGender);
    }

    async selectFavoriteDay(day){
        const favoriteDay = await By.id(String(day).toLowerCase());
        await this.click(favoriteDay);
    }

    async selectDrodpDownValue(dropdown, value){
        const dropdownElement = await this.waitForElementVisible(By.id(dropdown));
        await dropdownElement.findElement(By.xpath(`.//option[normalize-space()='${value}']`)).click();
    }
}

module.exports = PlaygroundPage;