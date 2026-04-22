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
- Tách test data checkout vào fixture để test case sạch và dễ maintain hơn
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

## 9. Lý do chọn công nghệ này cho định hướng cá nhân

Tôi chọn Cypress, JavaScript và GitHub Actions vì đây là bộ công nghệ phù hợp với định hướng trở thành một QA Automation Engineer có khả năng làm việc trong môi trường CI/CD thực tế. Cypress giúp tôi thực hành kiểm thử E2E theo đúng luồng người dùng thật, từ đăng nhập, thao tác sản phẩm, giỏ hàng đến checkout. Điều này rất quan trọng vì một tester không chỉ cần biết kiểm tra giao diện, mà còn phải hiểu cách xây dựng các kịch bản kiểm thử mô phỏng hành vi thực tế của người dùng.

JavaScript được chọn vì đây là ngôn ngữ phổ biến, dễ tích hợp với Cypress và cũng là nền tảng tốt để phát triển thêm các kỹ năng automation khác trong tương lai. Khi làm việc với JavaScript, tôi có thể học thêm cách tổ chức code, tái sử dụng hàm, quản lý test data và viết các custom command để làm cho bộ test gọn hơn, rõ hơn và dễ bảo trì hơn.

GitHub Actions là công nghệ giúp tôi hiểu cách kiểm thử được tích hợp vào quy trình phát triển phần mềm. Thay vì chỉ chạy test thủ công trên máy cá nhân, tôi có thể để workflow tự động chạy mỗi khi có thay đổi code. Điều này giúp tôi tiếp cận tư duy CI/CD thực tế, đồng thời hiểu rõ hơn vai trò của tester trong quy trình phát triển sản phẩm phần mềm hiện đại.

Ngoài ra, dự án này còn giúp tôi rèn luyện các kỹ năng quan trọng của một tester như đọc yêu cầu, xây dựng test case, phân loại luồng kiểm thử, quản lý dữ liệu test, và viết báo cáo minh chứng bằng screenshot, video, artifact. Đây là những kỹ năng cần thiết nếu tôi muốn theo hướng QA Automation lâu dài. Vì vậy, việc chọn bộ công nghệ này không chỉ phù hợp với bài tập hiện tại mà còn phù hợp với định hướng nghề nghiệp của tôi sau này.
