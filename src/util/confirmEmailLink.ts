import { redis } from 'src/redis';
import { v4 } from 'uuid';
export const confirmEmailLink = (token: string) => {
  // const id = v4();
  // redis.set(id, userId, 'ex', 60 * 60 * 15);
  return `${process.env.BACKEND_HOST}/auth/user/confirm/${token}`;
};
