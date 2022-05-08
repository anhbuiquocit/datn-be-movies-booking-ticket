import { MyError } from './../../util/handleException/MyError';
export const FilmError: {
  INVALID_INPUT_PARAMS: MyError;
  INVALID_NAME_OF_FILM: MyError;
} = {
  INVALID_INPUT_PARAMS: {
    errorCode: 3002,
    code: 'INVALID_INPUT_PARAMS',
    message: 'Kiểm tra lại dữ liệu',
  },
  INVALID_NAME_OF_FILM: {
    errorCode: 3003,
    code: 'INVALID_NAME_OF_FILM',
    message: 'Kiểm tra lại tên phim',
  },
};
