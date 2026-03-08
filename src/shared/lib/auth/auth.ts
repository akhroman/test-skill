const TOKEN = 'token';
export const getToken = () => localStorage.getItem(TOKEN);
export const setToken = (jwt: string) => localStorage.setItem(TOKEN, jwt);
