const { default: $$ } = require("webdriverio/build/commands/browser/$$");

class Basketball {

    //values are shared between hooks
        selectedSectionName = null
        selectedEventName = null
        selectedTeamName = null
        selectedFractionData = null
    
    getBreadCrumbsText =  () => $('.breadcrumbs__content'); 

    getTabbedContentElements = () => $$('.tabbed-events-title')

    getAllSections = () => $('.events-app__group')

    getSectionNameElement = (element) => element.$('.events-app__header__name')

    getAllTeam1Elements = (element) => element.$$('div[class="bet-price"]:nth-child(1)')

    getAllEnabledGamesTeam1Element = (element) => element.$('div:not([class*="disabled"])[class="bet-price"]:nth-child(1)')

    getAllEnabledGamesTeam1Elements = (element) => element.$$('div:not([class*="disabled"])[class="bet-price"]:nth-child(1)')

    getSelectedTeamElements = (element) => element.$$('div[class="bet-price selected"]')
   
    getEventPlayersName = (element) => element.$('.events-app__event__players')
}

module.exports = new Basketball();
