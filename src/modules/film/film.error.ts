import { MyError } from './../../util/handleException/MyError';
export const FilmError: {
  INVALID_INPUT_PARAMS: MyError;
} = {
  INVALID_INPUT_PARAMS: {
    errorCode: 3002,
    code: 'INVALID_INPUT_PARAMS',
    message: 'Kiểm tra lại dữ liệu',
  },
};
