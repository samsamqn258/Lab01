# Chức Năng Quản Lý Sản Phẩm - Thêm, Sửa, Xóa

## Giới Thiệu
Module này cung cấp các chức năng quản lý sản phẩm, bao gồm:
- Thêm sản phẩm mới.
- Sửa thông tin sản phẩm hiện có.
- Xóa sản phẩm không cần thiết.

---

## Các Chức Năng

### 1. Thêm Sản Phẩm
- **Mô tả**: Tạo mới và thêm sản phẩm vào hệ thống.
- **Chi tiết**:
  - Các trường nhập liệu: Tên sản phẩm, Giá, Danh mục, Mô tả, và Hình ảnh.
  - Kiểm tra tính hợp lệ của các trường bắt buộc.
  - Hiển thị thông báo thành công khi thêm mới.

### 2. Sửa Sản Phẩm
- **Mô tả**: Cập nhật thông tin chi tiết của sản phẩm hiện có.
- **Chi tiết**:
  - Hiển thị dữ liệu hiện tại của sản phẩm trên form.
  - Các trường có thể chỉnh sửa: Tên sản phẩm, Giá, Danh mục, Mô tả, và Hình ảnh.
  - Lưu thay đổi sau khi kiểm tra tính hợp lệ.

### 3. Xóa Sản Phẩm
- **Mô tả**: Xóa sản phẩm không còn sử dụng.
- **Chi tiết**:
  - Hiển thị hộp thoại xác nhận trước khi xóa.
  - Cập nhật danh sách sản phẩm sau khi xóa thành công.

---

## API Endpoints

### Thêm Sản Phẩm
```http
POST /api/products
