describe("Bộ kịch bản Kiểm thử Tự động - Chức năng Đăng nhập", () => {
  let data;

  before(() => {
    cy.fixture("loginData").then((fixtureData) => {
      data = fixtureData;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("TC01: Đăng nhập thành công với tài khoản và mật khẩu hợp lệ", () => {
    cy.login(data.validUser.username, data.validUser.password);
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
  });

  it("TC02: Đăng nhập thất bại do nhập sai Mật khẩu", () => {
    cy.login(data.invalidPassword.username, data.invalidPassword.password);
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });

  it("TC03: Đăng nhập thất bại do nhập sai Tên đăng nhập", () => {
    cy.login(data.invalidUsername.username, data.invalidUsername.password);
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });

  it("TC04: Đăng nhập thất bại do bỏ trống Tên đăng nhập", () => {
    cy.login(null, "secret_sauce");
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username is required");
  });

  it("TC05: Đăng nhập thất bại do bỏ trống Mật khẩu", () => {
    cy.login("standard_user", null);
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Password is required");
  });

  it("TC06: Đăng nhập thất bại do tài khoản đã bị khóa", () => {
    cy.login(data.lockedUser.username, data.lockedUser.password);
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Sorry, this user has been locked out");
  });
});