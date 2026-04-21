describe("Checkout - SauceDemo", () => {
  beforeEach(() => {
    cy.loginAsStandardUser();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
  });

  it("TC15: Checkout thất bại khi thiếu First Name", () => {
    cy.get('[data-test="lastName"]').type("Nguyen");
    cy.get('[data-test="postalCode"]').type("700000");
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "First Name is required");
  });

  it("TC16: Checkout thất bại khi thiếu Last Name", () => {
    cy.get('[data-test="firstName"]').type("Thanh");
    cy.get('[data-test="postalCode"]').type("700000");
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Last Name is required");
  });

  it("TC17: Checkout thất bại khi thiếu Postal Code", () => {
    cy.get('[data-test="firstName"]').type("Thanh");
    cy.get('[data-test="lastName"]').type("Tuyen");
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Postal Code is required");
  });

  it("TC18: Checkout thành công với dữ liệu hợp lệ", () => {
    cy.get('[data-test="firstName"]').type("Thanh");
    cy.get('[data-test="lastName"]').type("Tuyen");
    cy.get('[data-test="postalCode"]').type("700000");
    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "checkout-step-two.html");
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("contain", "Thank you for your order!");
  });
});