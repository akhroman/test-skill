import { ICredentials } from './types';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASS = 'admin';

export const loginRequest = async ({
  login,
  pass,
}: ICredentials): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (login === ADMIN_LOGIN && pass === ADMIN_PASS) {
        res(crypto.randomUUID());
      }
      rej(
        new Error(
          'Ошибка авторизации. Указаны неправильные логин и/или пароль',
        ),
      );
    }, 2000);
  });
};
