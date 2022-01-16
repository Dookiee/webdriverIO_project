const { Then } = require('@wdio/cucumber-framework');

const sideNavPage = require('../pageobjects/side.nav.page');

Then(/^I navigate on "([^"]*)?" in the sidenav$/, async (sideNavName) => {
    let element = await sideNavPage.getSideNavElementByText(sideNavName)
    await browser.execute("arguments[0].click();", element);
    await browser.waitUntil(
        async () => (await browser.getUrl()).includes(sideNavName),
        {
            timeout: 5000,
            timeoutMsg: 'URL still not updated after waiting for 5s!'
        }
    );
});
