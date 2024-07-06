@WelcomeScenario
Feature: Add Items to Cart and Complete Order

  @welcome
  Scenario : Verify user land on polestar application 
    Given User navigates to the polestar Dev website
    Then User should land on home page 
    Then User selects preffered location 
    When User gets navigated to the selected page and validate the url and title of the page

  @polestarUSRegion
  Scenario Outline: Verify Learn more action in US region 
  Given User navigates to "<UsRegionURL>"
  Then User clicks on Learn more button

  Examples:
  |    UsRegionURL                |
  | https://www.polestar.com/us/  |

  


