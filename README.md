# 🚀 Dự án Tích hợp Kiểm thử Tự động & CI/CD (Cypress + GitHub Actions)

![CI Status](https://img.shields.io/badge/build-passing-brightgreen)
![Cypress](https://img.shields.io/badge/Cypress-E2E_Testing-blue)
![Report](https://img.shields.io/badge/Report-Mochawesome-orange)

## 📌 Tổng quan Dự án

Dự án ứng dụng Cypress để xây dựng kịch bản kiểm thử tự động (E2E Testing) cho chức năng Đăng nhập. Tích hợp trực tiếp vào luồng CI/CD của GitHub Actions để tự động thực thi kiểm thử mỗi khi có thay đổi mã nguồn.

## 🌟 Điểm nổi bật (Nâng cao)

- **Kiểm thử Đa trình duyệt (Cross-browser):** Sử dụng Matrix Strategy trong CI/CD để chạy kịch bản song song trên cả `Chrome` và `Edge`.
- **Báo cáo Trực quan (HTML Report):** Tích hợp thư viện `cypress-mochawesome-reporter` để tự động trích xuất báo cáo kiểm thử dạng biểu đồ.

## 🧪 Kịch bản Kiểm thử (SUT: saucedemo.com)

Bao phủ 6 trường hợp kiểm thử (Test Cases) cho chức năng Login:

- `TC01`: Đăng nhập thành công với tài khoản và mật khẩu hợp lệ.
- `TC02`: Đăng nhập thất bại do nhập sai Mật khẩu.
- `TC03`: Đăng nhập thất bại do nhập sai Tên đăng nhập.
- `TC04`: Đăng nhập thất bại do bỏ trống Tên đăng nhập.
- `TC05`: Đăng nhập thất bại do bỏ trống Mật khẩu.
- `TC06`: Đăng nhập thất bại do tài khoản đã bị khóa.

## 💻 Hướng dẫn chạy môi trường Local

1. Cài đặt các thư viện phụ thuộc:
   `npm install`
2. Thực thi kiểm thử và xuất báo cáo HTML:
   `npx cypress run`
