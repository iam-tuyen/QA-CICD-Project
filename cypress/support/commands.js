Cypress.Commands.add("login", (username, password) => {
  if (username !== null) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  if (password !== null) {
    cy.get('[data-test="password"]').clear().type(password);
  }

  cy.get('[data-test="login-button"]').click();
});