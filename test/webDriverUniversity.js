const webdriver = require('selenium-webdriver');
const { By, Key, until } = require('selenium-webdriver')

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

describe('webDriverUniversity', function() {
    let driver;

    before(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    beforeEach(async function() {
        // Pokrece se pre svakog testa
    });

    afterEach(async function() {
        // Pokrece se nakon svakog testa
    });

    it('Verify homepage is open', async function(){
        await driver.get("http://webdriveruniversity.com/index.html");
        expect(await driver.getCurrentUrl()).to.eq("http://webdriveruniversity.com/index.html");
    });

    it("Contact us", async function(){
        const form = await driver.findElement(By.css('h1')).getText();
        await form.click();
        expect(await driver.getCurrentUrl()).to.eq
        ("http://webdriveruniversity.com/Contact-Us/contactus.html");
        await driver.sleep(3000);
    })
});
