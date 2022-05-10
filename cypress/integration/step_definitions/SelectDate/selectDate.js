beforeEach(() => {
  cy.visit("/");
});

When("I select a {string}, {string} and {string}", (year, month, day) => {
  cy.getLastCalendar().click();
  cy.selectYear(year);
  cy.selectMonth(month);
  cy.selectDay(day);
});

Then(
  "The {string}, {string} and {string} are selected",
  (day, month_number, year) => {
    cy.getLastCalendar().should("equal", `${year}-${month_number}-${day}`);
  }
);
