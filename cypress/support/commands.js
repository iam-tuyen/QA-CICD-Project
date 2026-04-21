Cypress.Commands.add("login", (username, password) => {
  if (username !== null) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  if (password !== null) {
    cy.get('[data-test="password"]').clear().type(password);
  }

  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("loginWithFixture", (userKey = "validUser") => {
  cy.fixture("loginData").then((data) => {
    const user = data[userKey];
    expect(user, `User key '${userKey}' should exist in loginData fixture`).to.exist;
    cy.login(user.username, user.password);
  });
});

Cypress.Commands.add("loginAsStandardUser", () => {
  cy.visit("/");
  cy.loginWithFixture("validUser");
  cy.url().should("include", "/inventory.html");
});