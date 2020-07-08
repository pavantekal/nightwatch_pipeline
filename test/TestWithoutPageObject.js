var config = require('../nightwatch.conf');

module.exports = {
  beforeEach: function (browser, done) {
    require('nightwatch-video-recorder').start(browser, done)
  },
  afterEach: function (browser, done) {
    require('nightwatch-video-recorder').stop(browser, done)
  },
  tags: ['shopify'],
  '@disabled': false,

  'Install Oberlo to Appstore': function (client) {
    client
      .url('https://accounts.shopify.com/store-login')
      .pause(3000);

    client
      .useXpath()
      .waitForElementVisible("//div[@class='next-input-wrapper']//input");
    client
      .useXpath()
      .setValue("//div[@class='next-input-wrapper']//input", "petti-angadi")
      .pause(10000);

    client
      .useXpath()
      .click("//button[@name='commit']");

    client
      .useXpath()
      .waitForElementPresent("//input[@id='account_email']", "4000");
    client
      .useXpath()
      .setValue("//input[@id='account_email']", "pavansrinirao@gmail.com")
      .pause(20000);

    client
      .useXpath()
      .click("//button[@name='commit']");

    client
      .useXpath()
      .waitForElementPresent("//input[@id='account_password']", "5000");
    client
      .useXpath()
      .setValue("//input[@id='account_password']", "test@123")
      .pause(10000);

    client
      .useXpath()
      .click("//button[@name='commit']");

    client
      .useXpath()
      .waitForElementPresent("//a[@href='/admin/apps']", "5000")
      .pause(10000);

    client
      .useXpath()
      .click("//a[@href='/admin/apps']");

    client
      .useXpath()
      .waitForElementPresent("//a//span[text()='Visit the Shopify App Store']", "5000")

    client
      .useXpath()
      .click("//a//span[text()='Visit the Shopify App Store']")
      .pause(10000)
      .windowHandles(function (result) {
        this.verify.equal(result.value.length, 2, '2 windows should be open')
        var handle = result.value[1]
        this.switchWindow(handle)
      })
      .verify.urlContains('apps.shopify.com')
      .useXpath()
      .waitForElementVisible("//form[@id='ui-app-store-hero__home-search']//input", 2000)
      .pause(2000);

    client
      .useXpath()
      .setValue("//form[@id='ui-app-store-hero__home-search']//input", "Oberlo")
      .pause(5000);

    client
      .useXpath()
      .click("//button[@class='ui-search-suggestions__button hero-search-form__button']")
      .pause(3000);

    client
      .useXpath()
      .click("//div[@title='Go to Oberlo ‑ Dropshipping App']")
      .pause(3000);

    client
      .useXpath()
      .click("//input[@value='Add app']")
      .pause(5000);

    // client
    //   .useXpath()
    //   .click("//span[contains(text(),'Hide details')]")
    //   .pause(2000);

    // client.execute('window.scrollTo(0,document.body.scrollHeight);');

    // client
    //   .useXpath()
    //   .waitForElementVisible("//button[@id='proceed_cta']");

    // client
    //   .useXpath()
    //   .click("//button[@id='proceed_cta']")
    //   .pause(3000);

    // client
    //   .verify.urlContains('app.oberlo.com')
    //   .pause(3000)
    //   .end();

  },

  // 'Verify Oberlo in Appstore': function (client) {
  //   client
  //     .url('https://accounts.shopify.com/store-login')
  //     .pause(3000);

  //   client
  //     .useXpath()
  //     .waitForElementVisible("//div[@class='next-input-wrapper']//input");
  //   client
  //     .useXpath()
  //     .setValue("//div[@class='next-input-wrapper']//input", "petti-angadi")
  //     .pause(10000);

  //   client
  //     .useXpath()
  //     .click("//button[@name='commit']");

  //   client
  //     .useXpath()
  //     .waitForElementPresent("//input[@id='account_email']", "5000");
  //   client
  //     .useXpath()
  //     .setValue("//input[@id='account_email']", "pavansrinirao@gmail.com")
  //     .pause(10000);

  //   client
  //     .useXpath()
  //     .click("//button[@name='commit']");

  //   client
  //     .useXpath()
  //     .waitForElementPresent("//input[@id='account_password']", "5000");
  //   client
  //     .useXpath()
  //     .setValue("//input[@id='account_password']", "test@123")
  //     .pause(10000);

  //   client
  //     .useXpath()
  //     .click("//button[@name='commit']");

  //   client
  //     .useXpath()
  //     .waitForElementPresent("//a[@href='/admin/apps']", "5000")
  //     .pause(10000);

  //   client
  //     .useXpath()
  //     .click("//a[@href='/admin/apps']");

  //   client
  //     .useXpath()
  //     .waitForElementPresent("//a//span[text()='Visit the Shopify App Store']", "5000")

  //   client
  //     .useXpath()
  //     .expect.element("//div//div[contains(text(),'Oberlo')]").to.be.visible;
  // }

}