const getLastCalendar = () => {
  cy.get('[data-id="inline"]');
};

const selectMonth = (monthName) => {
  cy.xpath('(//select[@class="flatpickr-monthDropdown-months"][1])[1]').select(
    monthName
  );
};

const selectYear = (yearNumber) => {
  cy.xpath('(//div[@class="numInputWrapper"][1])[1]').type(yearNumber);
};

const selectDay = (dayNumber) => {
  cy.xpath('(//div[@class="dayContainer"][1])[1]').contains(dayNumber).click();
};

const getMultipleOptionCalendar = () => {
  cy.get('[data-id="multiplePreload"]');
};

const selectMonthWhenMultiple = (monthName) => {
  cy.xpath(
    '//div[@class="flatpickr-calendar animate open arrowTop arrowLeft"]//select[@aria-label="Month"]'
  ).select(monthName);
};

const selectYearWhenMultiple = (yearNumber) => {
  cy.xpath(
    '//div[@class="flatpickr-calendar animate open arrowTop arrowLeft"]//input[@aria-label="Year"]'
  ).type(yearNumber);
};

const selectDayWhenMultiple = (dayNumber) => {
  cy.xpath(
    '//div[@class="flatpickr-calendar animate open arrowTop arrowLeft"]//div[@class="dayContainer"]'
  )
    .contains(dayNumber)
    .click();
};

const getTimeCalendar = () => {
  cy.get('[data-id="timePicker24"]');
};

const changeHour = (number) => {
  cy.xpath(
    '//div[@class="flatpickr-time time24hr"]//input[@aria-label="Hour"]'
  ).type(number);
};

const changeMinute = (number) => {
  cy.xpath(
    '//div[@class="flatpickr-time time24hr"]//input[@aria-label="Minute"]'
  ).type(number);
};

Cypress.Commands.add("getLastCalendar", getLastCalendar);
Cypress.Commands.add("selectMonth", selectMonth);
Cypress.Commands.add("selectYear", selectYear);
Cypress.Commands.add("selectDay", selectDay);
Cypress.Commands.add("getMultipleOptionCalendar", getMultipleOptionCalendar);
Cypress.Commands.add("selectMonthWhenMultiple", selectMonthWhenMultiple);
Cypress.Commands.add("selectYearWhenMultiple", selectYearWhenMultiple);
Cypress.Commands.add("selectDayWhenMultiple", selectDayWhenMultiple);
Cypress.Commands.add("getTimeCalendar", getTimeCalendar);
Cypress.Commands.add("changeHour", changeHour);
Cypress.Commands.add("changeMinute", changeMinute);
