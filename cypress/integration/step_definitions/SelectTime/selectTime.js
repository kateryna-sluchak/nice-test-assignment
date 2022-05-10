//this is a happy flow example, but it's possible to add more data to the "examples"

beforeEach(() => {
  cy.visit("/");
});

When("I select a {string} and {string}", (hours, minutes) => {
  cy.getTimeCalendar().scrollIntoView().click();
  cy.changeHour(hours);
  cy.changeMinute(minutes);
  cy.changeMinute("{enter}");
});

Then("The {string} and {string} are selected", (hours, minutes) => {
  cy.getTimeCalendar().should("have.value", `${hours}:${minutes}`);
});
