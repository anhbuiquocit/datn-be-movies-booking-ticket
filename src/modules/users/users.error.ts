import { MyError } from './../../util/handleException/MyError';
export const UsersError: {
  INVALID_INPUT_PARAMS: MyError;
  USERNAME_IS_EXISTED: MyError;
  NAME_IS_NULL: MyError;
  BIRTHDAY_IS_NULL: MyError;
  USERNAME_IS_NULL: MyError;
  PASSWORD_IS_NULL: MyError;
  EMAIL_IS_NULL: MyError;
  USERNAME_EMAIL_IS_EXIST: MyError;
  UPDATE_FAILED: MyError;
} = {
  INVALID_INPUT_PARAMS: {
    errorCode: 4002,
    code: 'INVALID_INPUT_PARAMS',
    message: 'Kiểm tra lại dữ liệu',
  },
  USERNAME_IS_EXISTED: {
    errorCode: 4002,
    code: 'USERNAME_IS_EXISTED',
    message: 'Tên đăng nhập đã tồn tại',
  },
  NAME_IS_NULL: {
    errorCode: 4002,
    code: 'NAME_IS_NULL',
    message: 'Nhập tên của bạn',
  },
  BIRTHDAY_IS_NULL: {
    errorCode: 4003,
    code: 'BIRTHDAY_IS_NULL',
    message: 'Kiểm tra lại ngày sinh',
  },
  PASSWORD_IS_NULL: {
    errorCode: 4004,
    code: 'PASSWORD_IS_NULL',
    message: 'Mật khẩu không được để trống',
  },
  EMAIL_IS_NULL: {
    errorCode: 4005,
    code: 'EMAIL_IS_NULL',
    message: 'Email không được để trống',
  },
  USERNAME_IS_NULL: {
    errorCode: 4006,
    code: 'USERNAME_IS_NULL',
    message: 'Tên đăng nhập không được để trống',
  },
  USERNAME_EMAIL_IS_EXIST: {
    errorCode: 4007,
    code: 'USERNAME_EMAIL_IS_EXIST',
    message: 'Tên đăng nhập hoặc email đã tồn tại',
  },
  UPDATE_FAILED: {
    errorCode: 4008,
    code: 'UPDATE_FAILED',
    message: 'ID người dùng không tồn tại',
  },
};
