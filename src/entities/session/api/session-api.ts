import { ICredentials } from '../model/types';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASS = 'admin';

export const loginRequest = async ({
    login,
    pass
}: ICredentials): Promise<string> => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const isValid = login === ADMIN_LOGIN && pass === ADMIN_PASS;
            if (isValid) {
                res(crypto.randomUUID());
            } else {
                rej(
                    new Error(
                        'Ошибка авторизации. Указаны неправильные логин и/или пароль'
                    )
                );
            }
        }, 2000);
    });
};
