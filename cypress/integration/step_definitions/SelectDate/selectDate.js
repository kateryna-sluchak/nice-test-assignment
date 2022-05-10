beforeEach(() => {
  cy.visit("/");
});

When("I select a {string}, {string} and {string}", (year, month, day) => {
  cy.selectYear(year);
  cy.selectMonth(month);
  cy.selectDay(day);
});

Then(
  "The {string}, {string} and {string} are selected",
  (day, month_number, year) => {
    cy.getLastCalendar().should("have.value", `${year}-${month_number}-${day}`);
  }
);

When(
  "I select {string}, {string}, {string} and {string}, {string}, {string}",
  (year_1, month_1, day_1, year_2, month_2, day_2) => {
    cy.getMultipleOptionCalendar()
      .scrollIntoView()
      .click()
      .clear({ force: true });
    cy.selectYearWhenMultiple(year_1);
    cy.selectMonthWhenMultiple(month_1);
    cy.selectDayWhenMultiple(day_1);
    cy.selectYearWhenMultiple(year_2);
    cy.selectMonthWhenMultiple(month_2);
    cy.selectDayWhenMultiple(day_2);
  }
);

Then(
  "The {string}, {string}, {string} and {string}, {string}, {string} are selected",
  (year_1, month_number_1, day_1, year_2, month_number_2, day_2) => {
    cy.getMultipleOptionCalendar().should(
      "have.value",
      `${year_1}-${month_number_1}-${day_1}, ${year_2}-${month_number_2}-${day_2}`
    );
  }
);
