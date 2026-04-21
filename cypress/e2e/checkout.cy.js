describe("Checkout - SauceDemo", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("loginData").then((data) => {
      cy.login(data.validUser.username, data.validUser.password);
    });

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
  });

  it("TC13: Checkout thất bại khi thiếu First Name", () => {
    cy.get('[data-test="lastName"]').type("Nguyen");
    cy.get('[data-test="postalCode"]').type("700000");
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "First Name is required");
  });

  it("TC14: Checkout thành công với dữ liệu hợp lệ", () => {
    cy.get('[data-test="firstName"]').type("Thanh");
    cy.get('[data-test="lastName"]').type("Tuyen");
    cy.get('[data-test="postalCode"]').type("700000");
    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "checkout-step-two.html");
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("contain", "Thank you for your order!");
  });
});