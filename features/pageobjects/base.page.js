/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class LaunchApp {
    /**
    * Opens a sub page of the page
    */
    open() {
        browser.url(browser.options.baseUrl)
        browser.setTimeout({ 'pageLoad': 20000, 'script': 30000, 'implicit': 30000  })
    }
}

module.exports = new LaunchApp()
