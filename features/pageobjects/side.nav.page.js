
/**
 * sub page containing specific selectors and methods for a specific page
 */


class SideBar {

    getSideNavElements = () => $$('.column-list__entry__content') 

    getSideNavElementByText = (text) => $(`.app.static-left-navigation a[href*='${text}']`) 

}

module.exports = new SideBar();