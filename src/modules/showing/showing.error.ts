import { MyError } from './../../util/handleException/MyError';
export const ShowingError: {
  FILM_NOT_EXIST: MyError;
  ROOM_NOT_EXIST: MyError;
  PRICE_IS_NOT_VALID: MyError;
  IMPOSSIBLE_DATE_IN_THE_PAST: MyError;
  SHOWING_IS_EXIST: MyError;
} = {
  FILM_NOT_EXIST: {
    errorCode: 6001,
    code: 'FILM_NOT_EXIST',
    message: 'Phim không tồn tại',
  },
  ROOM_NOT_EXIST: {
    errorCode: 6002,
    code: 'ROOM_NOT_EXIST',
    message: 'Phòng không tồn tại',
  },
  PRICE_IS_NOT_VALID: {
    errorCode: 6003,
    code: 'PRICE_IS_NOT_VALID',
    message: 'Giá vé không hợp lệ',
  },
  IMPOSSIBLE_DATE_IN_THE_PAST: {
    errorCode: 6004,
    code: 'IMPOSSIBLE_DATE_IN_THE_PAST',
    message: 'Không thể tạo ngày trong quá khứ',
  },
  SHOWING_IS_EXIST: {
    errorCode: 6005,
    code: 'SHOWING_IS_EXIST',
    message: 'Đã tồn tại xuất chiếu trong khoảng thời gian này',
  },
};
