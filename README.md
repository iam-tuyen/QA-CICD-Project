# 🚀 Tích hợp Kiểm thử tự động với CI/CD (Cypress & GitHub Actions)

![CI Status](https://img.shields.io/badge/build-passing-brightgreen)
![Cypress](https://img.shields.io/badge/Cypress-E2E_Testing-blue)

## 📌 Tổng quan

Dự án demo việc tích hợp kịch bản kiểm thử tự động (Automation Test) vào quy trình CI/CD. Mỗi khi có code mới được đẩy lên, GitHub Actions sẽ tự động kích hoạt môi trường và chạy test.

## ⚙️ Công nghệ sử dụng

- **Framework:** Cypress
- **CI/CD:** GitHub Actions
- **Mục tiêu test:** `saucedemo.com`

## 🧪 Kịch bản kiểm thử

1. Đăng nhập thành công.
2. Xử lý ngoại lệ khi sai mật khẩu.
