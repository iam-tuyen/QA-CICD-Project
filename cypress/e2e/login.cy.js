describe('Bộ kịch bản Kiểm thử Tự động - Chức năng Đăng nhập', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('TC01: Đăng nhập thành công với tài khoản và mật khẩu hợp lệ', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('TC02: Đăng nhập thất bại do nhập sai Mật khẩu', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('sai_mat_khau_123')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('TC03: Đăng nhập thất bại do nhập sai Tên đăng nhập', () => {
    cy.get('[data-test="username"]').type('user_khong_ton_tai')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('TC04: Đăng nhập thất bại do bỏ trống Tên đăng nhập', () => {
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

  it('TC05: Đăng nhập thất bại do bỏ trống Mật khẩu', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Password is required')
  })

  it('TC06: Đăng nhập thất bại do tài khoản đã bị khóa', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out')
  })
})