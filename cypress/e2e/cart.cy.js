describe("Cart - SauceDemo", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("loginData").then((data) => {
      cy.login(data.validUser.username, data.validUser.password);
    });
  });

  it("TC10: Thêm 1 sản phẩm vào giỏ hàng", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
  });

  it("TC11: Xóa sản phẩm khỏi giỏ hàng", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();

    cy.get(".cart_item").its("length").should("be.gte", 1);
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get(".cart_item").should("have.length", 0);
  });

  it("TC12: Thêm 2 sản phẩm vào giỏ hàng", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_badge").should("contain", "2");
  });
});