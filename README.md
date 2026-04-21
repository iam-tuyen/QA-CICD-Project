# Dự án Tích hợp Kiểm thử Tự động & CI/CD (Cypress + GitHub Actions)

## Tổng quan Dự án
Dự án sử dụng Cypress để xây dựng bộ kiểm thử tự động E2E cho website SauceDemo.  
Hệ thống được tích hợp với GitHub Actions để tự động chạy test khi push code hoặc tạo pull request.

## Điểm nổi bật
- Kiểm thử tự động E2E với Cypress
- Áp dụng custom command (`cy.login()`)
- Áp dụng fixture để quản lý dữ liệu test
- Bật retries để giảm flaky test trên CI
- CI/CD với GitHub Actions
- Chạy kiểm thử đa trình duyệt bằng matrix strategy
- Upload screenshots, videos và reports sau mỗi lần chạy

## Phạm vi kiểm thử
### 1. Login
- TC01: Login thành công
- TC02: Sai mật khẩu
- TC03: Sai username
- TC04: Bỏ trống username
- TC05: Bỏ trống password
- TC06: Tài khoản bị khóa

### 2. Inventory
- TC07: Hiển thị danh sách sản phẩm
- TC08: Sắp xếp giá từ thấp đến cao
- TC09: Đăng xuất hệ thống

### 3. Cart
- TC10: Thêm 1 sản phẩm vào giỏ
- TC11: Xóa sản phẩm khỏi giỏ
- TC12: Thêm 2 sản phẩm vào giỏ

### 4. Checkout
- TC13: Checkout thất bại khi thiếu First Name
- TC14: Checkout thành công với dữ liệu hợp lệ

## Cấu trúc thư mục
```text
.github/workflows/main.yml
cypress/e2e/
cypress/fixtures/
cypress/support/
cypress.config.js
package.json