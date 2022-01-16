const { default: $ } = require("webdriverio/build/commands/browser/$");


class BetSlip {

    getBetSlipEntrys =  () => $$('.betslip__entry__event'); 

    getBetSlipEntry =  () => $('.betslip__entry__event'); 

    getEventDetailsName = () => $('.betslip__entry__event__details__name')

    getMatchDetails = () => $('.betslip__entry__event strong')

    getSelectedTeamName = () => $('.betslip__entry__event__details__players')

    getFractionPriceDetails = () => $('.js-price-selector')

    getInputBetAmount = () => $('input[class*="betslip__entry__content__stake__value"]')

    getTotalStakeAmountUpdted = () => $('#js-total-stake')

    getTotalReturnsUpdted = () => $('#js-total-returns')
}  


module.exports = new BetSlip()