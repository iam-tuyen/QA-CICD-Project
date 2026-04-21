describe("Inventory - SauceDemo", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("loginData").then((data) => {
      cy.login(data.validUser.username, data.validUser.password);
    });
  });

  it("TC07: Hiển thị danh sách sản phẩm sau khi login", () => {
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
    cy.get(".inventory_item").its("length").should("be.gte", 1);
  });

  it("TC08: Sắp xếp giá từ thấp đến cao", () => {
    cy.get('[data-test="product-sort-container"]').select("lohi");

    cy.get(".inventory_item_price").then(($prices) => {
      const values = [...$prices].map((el) =>
        Number(el.innerText.replace("$", ""))
      );
      const sorted = [...values].sort((a, b) => a - b);
      expect(values).to.deep.equal(sorted);
    });
  });

  it("TC09: Đăng xuất khỏi hệ thống", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link", { timeout: 10000 }).click();
    cy.url().should("include", "saucedemo.com");
  });
});