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

    Scenario Outline: Select multiple dates

        When I select '<year_1>', '<month_1>', '<day_1>' and '<year_2>', '<month_2>', '<day_2>'
        Then The '<year_1>', '<month_number_1>', '<day_1>' and '<year_2>', '<month_number_2>', '<day_2>' are selected
        Examples:
            | year_1 | month_1 | month_number_1 | day_1 | year_2 | month_2 | month_number_2 | day_2 |
            | 2024   | April   | 04             | 12    | 2023   | May     | 05             | 12    |