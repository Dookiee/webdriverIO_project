const { Given } = require("@cucumber/cucumber");
const launchApp = require('../pageobjects/base.page')


Given(/^launch the homepage of Jenningsbet$/,async () => {
    await launchApp.open()
});