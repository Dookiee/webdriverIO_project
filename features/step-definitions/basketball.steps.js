const { Given, Then } = require('@wdio/cucumber-framework');
const baseballPage = require('../pageobjects/basketball');
const betSlipPage = require('../pageobjects/betslip.page');

    Given(/^I click Add an odd to the betslip$/,async (table) => {
    
        //Click the Tab -> Featured | LiveNow | Next (based on feature file input)
        await baseballPage.getBreadCrumbsText()
        let elements = await baseballPage.getTabbedContentElements()
        elements.filter( async (element) => {
            let text = await element.getText() 
            if (text == table.rows()[0][0]){
                await element.click()
            }
        })

        //Select the valid Bet game in the list and click on Team1 button
        elements = await baseballPage.getAllSections()
        let selected_button = await baseballPage.getAllEnabledGamesTeam1Element(section)
        baseballPage.selectedFractionData = selected_button.getText()
        await selected_button.click()

        //After click event elements ID's are updated so fetching again the latest ID's
        let sectionElements = await baseballPage.getAllSections()
        for (let i = 0; i < sectionElements.length; i++) {
            elements = await baseballPage.getSelectedTeamElements(sectionElements[i])
            if (element.length != 0){
                baseballPage.selectedEventName = baseballPage.getEventPlayersName(sectionElements[i])      
                baseballPage.selectedSectionName = baseballPage.getSectionNameElement(sectionElements[i])
                baseballPage.selectedTeamName = baseballPage.selectedEventName.split('v')[0]
            }
        }

   });


   Then(/^Verify the selected odd is added$/,async () => {
        let betSlips = await betSlipPage.getBetSlipEntrys()
        expect(betSlips.length).to.equal(1)
   });

   Then(/^Verify the match name is correct on betslip$/,async () => {
        let eventName = await betSlipPage.getEventDetailsName()
        expect(await eventName.getText()).to.equal(baseballPage.selectedSectionName)
    });

    Then(/^Verify the match name is correct on betslip$/,async () => {
        let eventName = await betSlipPage.getMatchDetails()
        expect(await eventName.getText()).to.equal(baseballPage.selectedEventName)
    });

    Then(/^Verify selected odds team is displayed in Bold on the betslip$/,async () => {
        let selectedTeam = await betSlipPage.getSelectedTeamName()
        expect(await selectedTeam.getText()).to.equal(baseballPage.selectedTeamName)
    });

    Then(/^Enter the stake amount as "([^"]*)?"$/,async (amount) => {
        let inputBetAmount = await betSlipPage.getInputBetAmount()
        await inputBetAmount.click()
        await inputBetAmount.setValue(amount)
        expect(await inputBetAmount.getText()).to.equal(amount)
    });

    Then(/^Verify the total stake (is equal to stake amount)$/,async (table) => {
        let totalStackAmount = await betSlipPage.getTotalStakeAmountUpdted() 
        expect(await totalStackAmount.getText()).to.equal(table.rows()[0][0])
    });


    Then(/^Verify potential return value with formula$/,async (table) => {
        let getFractionDetailsinBetSlip = await betSlipPage.getFractionPriceDetails() 
        let fraction = getFractionDetailsinBetSlip.split('/')
        let totalReturnsExpected = Math.round(((parseInt(fraction[0])/parseInt(fraction[0])) + 1) * parseInt(table.rows()[0][1]))
        let totalReturnsAcutal = await betSlipPage.getTotalReturnsUpdted()
        expect(await totalReturnsAcutal.getText()).to.equal(totalReturnsExpected)
    });







