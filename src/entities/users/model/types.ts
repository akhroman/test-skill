export interface IUser {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
}

export interface IUserItemProps extends IUser {
    loading?: boolean;
}
