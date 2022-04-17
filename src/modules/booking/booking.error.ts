import { MyError } from 'src/util/handleException/MyError';

export const BookingError: {
  USER_IS_NOT_EXIST: MyError;
  SHOWING_IS_NOT_EXIST: MyError;
  SEAT_IS_NOT_EXIST: MyError;
  SEAT_SHOWING_IS_BOOKED: MyError;
  NO_SEAT_SELECTED: MyError;
} = {
  USER_IS_NOT_EXIST: {
    errorCode: 5001,
    code: 'USER_IS_NOT_EXIST',
    message: 'Người dùng không tồn tại',
  },
  SHOWING_IS_NOT_EXIST: {
    errorCode: 5002,
    code: 'SHOWING_IS_NOT_EXIST',
    message: 'Xuất chiếu không tồn tại',
  },
  SEAT_IS_NOT_EXIST: {
    errorCode: 5003,
    code: 'SEAT_IS_NOT_EXIST',
    message: 'Mã ghế không tồn tại',
  },
  SEAT_SHOWING_IS_BOOKED: {
    errorCode: 5003,
    code: 'SEAT_SHOWING_IS_BOOKED',
    message: 'Có ghế đã được đặt',
  },
  NO_SEAT_SELECTED: {
    errorCode: 5004,
    code: 'NO_SEAT_SELECTED',
    message: 'Hãy chọn ghế',
  },
};
