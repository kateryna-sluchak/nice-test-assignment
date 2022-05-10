const getLastCalendar = () => {
  cy.get('[data-id="strap"]')
}

const selectMonth = (monthName) => {
  cy.xpath('(//select[@class="flatpickr-monthDropdown-months"][1])[1]').select(monthName)
};

const selectYear = (yearNumber) => {
  cy.xpath('(//div[@class="numInputWrapper"][1])[1]').type(yearNumber)
};

const selectDay = (dayNumber) => {
  cy.xpath('(//div[@class="dayContainer"][1])[1]').contains(dayNumber).click()
};

Cypress.Commands.add('getLastCalendar', getLastCalendar);
Cypress.Commands.add('selectMonth', selectMonth);
Cypress.Commands.add('selectYear', selectYear);
Cypress.Commands.add('selectDay', selectDay);

