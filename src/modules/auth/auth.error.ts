import { MyError } from 'src/util/handleException/MyError';

export const AuthError: {
  USER_NAME_NOT_CORRECT: MyError;
  INVALID_INPUT_PARAMS: MyError;
  PASSWORD_IS_NOT_CORRECT: MyError;
} = {
  USER_NAME_NOT_CORRECT: {
    errorCode: 2001,
    code: 'USER_NAME_NOT_CORRECT',
    message: 'Tên đăng nhập không chính xác',
  },
  INVALID_INPUT_PARAMS: {
    errorCode: 2002,
    code: 'INVALID_INPUT_PARAMS',
    message: 'Kiểm tra lại dữ liệu',
  },
  PASSWORD_IS_NOT_CORRECT: {
    errorCode: 2003,
    code: 'PASSWORD_IS_NOT_CORRECT',
    message: 'Mật khẩu chưa chính xác',
  },
};
