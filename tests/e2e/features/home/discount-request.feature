@tag-rooftop-revolution-page

Feature: ☀️ Rooftop Revolution Discount Request Form
  Background:
    When The user goes on the Rooftop Revolution Page
    When The user sees a Client Finder by Cups Form "¿Quieres saber más?"

  Scenario Outline: CUPS input validation
    Then The user enters a <type> CUPS
    And The submit button should be <state>

    Examples:
      | type     | state        |
      | invalid  | disabled     |
      | valid    | enabled      |

  Scenario: Submit form
    When The user enters a valid CUPS
    Then The user submit the Rooftop Revolution Discount Request Form
    And The user have been redirect to Rooftop Revolution Offer Page
    