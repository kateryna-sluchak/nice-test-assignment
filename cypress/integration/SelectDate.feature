Feature: Select Date

    In order to schedule something
    As a user
    I want ot be able to select a Date

    Scenario Outline: Select a Date

        When I select a '<year>', '<month>' and '<day>'
        Then The '<day>', '<month_number>' and '<year>' are selected
        Examples:
            | year | month    | month_number | day |
            | 2015 | February | 02           | 28  |
            | 2028 | April    | 04           | 19  |
