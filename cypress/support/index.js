import './commands';
import 'cypress-real-events/support';
require('cypress-xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
