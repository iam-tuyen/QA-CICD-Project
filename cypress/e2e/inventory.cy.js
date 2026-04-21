describe("Inventory - SauceDemo", () => {
  beforeEach(() => {
    cy.loginAsStandardUser();
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

  it("TC09: Sắp xếp tên từ A đến Z", () => {
    cy.get('[data-test="product-sort-container"]').select("az");

    cy.get(".inventory_item_name").then(($names) => {
      const values = [...$names].map((el) => el.innerText.trim());
      const sorted = [...values].sort((a, b) => a.localeCompare(b));
      expect(values).to.deep.equal(sorted);
    });
  });

  it("TC10: Đăng xuất khỏi hệ thống", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link", { timeout: 10000 }).click();
    cy.location("pathname").should("eq", "/");
  });
});