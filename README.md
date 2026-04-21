# QA-CICD Project - Cypress + GitHub Actions

## 1. Tổng quan dự án

Đây là dự án thực hành kiểm thử tự động E2E cho website SauceDemo bằng Cypress, kết hợp GitHub Actions để xây dựng quy trình CI/CD tự động.

Mục tiêu của dự án là:

- Tự động hóa kiểm thử các chức năng quan trọng
- Tích hợp kiểm thử vào quy trình CI/CD
- Tạo report và video làm minh chứng
- Thực hành theo hướng QA / Tester / Automation Testing

## 2. Công nghệ sử dụng

- Cypress
- JavaScript
- GitHub Actions
- Mochawesome Reporter
- Git / GitHub

## 3. Kiến trúc / mô hình hoạt động

Quy trình hoạt động của dự án:

1. Lập trình viên cập nhật code và push lên GitHub
2. GitHub Actions tự động kích hoạt workflow
3. Workflow cài đặt dependency bằng npm
4. Cypress tự động chạy test
5. Hệ thống sinh report, screenshots, videos
6. Kết quả được lưu lại dưới dạng artifacts trên GitHub Actions

## 4. Phạm vi kiểm thử

### Login

- TC01: Login thành công
- TC02: Sai mật khẩu
- TC03: Sai username
- TC04: Bỏ trống username
- TC05: Bỏ trống password
- TC06: Tài khoản bị khóa

### Inventory

- TC07: Hiển thị danh sách sản phẩm
- TC08: Sắp xếp giá từ thấp đến cao
- TC09: Sắp xếp tên từ A đến Z
- TC10: Đăng xuất hệ thống

### Cart

- TC11: Thêm 1 sản phẩm vào giỏ hàng
- TC12: Xóa sản phẩm khỏi giỏ hàng
- TC13: Thêm 2 sản phẩm vào giỏ hàng
- TC14: Xóa sản phẩm ngay tại trang inventory

### Checkout

- TC15: Thiếu First Name
- TC16: Thiếu Last Name
- TC17: Thiếu Postal Code
- TC18: Checkout thành công

## 5. CI/CD Pipeline

Workflow được cấu hình để:

- chạy Smoke test khi tạo pull request vào `main` (Chrome)
- chạy full Regression test khi push vào `main` (Chrome + Edge)
- hỗ trợ chạy thủ công
- upload reports và videos làm artifacts

## 6. Scripts chính

- `npm test`: chạy toàn bộ E2E suite
- `npm run test:smoke`: chạy bộ smoke (login + inventory)
- `npm run test:regression`: chạy full regression suite
- `npm run test:chrome`: chạy test trên Chrome
- `npm run test:edge`: chạy test trên Edge

## 7. Điểm nâng cấp đã áp dụng

- Refactor reusable login command để giảm lặp code giữa các test suite
- Chuẩn hóa assertion logout theo `pathname` để tránh phụ thuộc URL tuyệt đối
- Tối ưu retry `runMode` để giảm việc che giấu flaky test
- Tách pipeline Smoke/Regression để phản ánh tư duy QA thực tế trong CI/CD

## 8. Cấu trúc thư mục

```text
.github/workflows/main.yml
cypress/e2e/
cypress/fixtures/
cypress/support/
cypress.config.js
package.json
README.md
```
