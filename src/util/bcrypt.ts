import { Resolver } from '@nestjs/graphql';
import bcrypt from 'bcrypt';

export const hash = (pass: string) =>
  bcrypt.hashSync(pass, bcrypt.getSaltSync(12));

export const compare = (pass: string, encrypt: string) =>
  new Promise((resolve: any, reject: any) => {
    bcrypt.compare(pass, encrypt, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
