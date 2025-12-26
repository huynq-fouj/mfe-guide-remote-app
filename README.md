## Remote App
- Các bước tạo app remote trong cấu trúc MicroFrontend với dự án angular 18 được tạo trước khi thêm @angular-architects/native-federation.
### Bước 1: Cài đặt angular
- Tải `@angular/cli` bản 18.
```powershell
npm install -g @angular/cli@18.0.0
```
- Yêu cầu bản node.js thuộc chu kỳ LTS tối thiểu là `v18.13.0` trở lên.
### Bước 2: Tạo remote app
- Tạo dự án Remote.
```powershell
ng new remote-test
```
- Chọn các options tạo dự án và đợi hoàn tất install các phụ thuộc.
### Bước 3: Cấu hình native federation cho remote app
- Cài đặt `@angular-architects/native-federation`.
```powershell
ng add @angular-architects/native-federation --save-dev
```
- Sử dụng lệnh ng add để tự động thay đổi cấu hình file [package.json](./package.json), [angular.json](./angular.json), [main.ts](./src/main.ts) và tự động tạo file [federation.config.js](./federation.config.js).
### Chạy dự án.
```powershell
npm start
```
---
- Dự án tham khảo khác: [remote-host.vercel.app](https://remote-host.vercel.app/).
- Remote host: [github](https://github.com/huynq-fouj/remote-host).
- Remote products: [github](https://github.com/huynq-fouj/remote-products).
- Remote cart: [github](https://github.com/huynq-fouj/remote-cart).
- Remote shared-ui: [github](https://github.com/huynq-fouj/remote-shared-ui). 