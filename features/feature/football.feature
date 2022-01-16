Feature: Jenningsbet - bet on Basketball game

    Background:
        Given launch the homepage of Jenningsbet
        And I navigate on "BASKETBALL" in the sidenav

    Scenario Outline: Validate Potential returns in Basketball game (Formula used is for reference validation. not to use in the code)
        When I click Add an odd to the betslip
            | TabName  |
            | Featured | 
        Then Verify the selected odd is added
        Then Verify the match name is correct on betslip
        Then Verify the odd value is correct on betslip
        Then Verify selected odds team is displayed in Bold on the betslip
        And Enter the stake amount as "100"
        Then Verify the total stake (is equal to stake amount)
            | Amount |
            | 100    |
        Then Verify potential return value with formula
            | formula                      | Amount |
            | (odd price + 1)*stake amount | 100    |


