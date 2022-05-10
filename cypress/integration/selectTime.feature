Feature: Select Time

    In order to schedule something
    As a user
    I want ot be able to select a Time

    Scenario Outline: Select a Time

        When I select a '<hours>' and '<minutes>'
        Then The '<hours>' and '<minutes>' are selected
        Examples:
            | hours | minutes |
            | 15    | 15      |
