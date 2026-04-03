describe('Kiểm thử chức năng Đăng nhập - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('TC01: Đăng nhập thành công với tài khoản đúng', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('TC02: Báo lỗi khi sai mật khẩu', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('wrong_pass')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})