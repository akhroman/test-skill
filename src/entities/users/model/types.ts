export interface IUserCreate {
    name: string;
    avatar: string;
}

export interface IUser extends IUserCreate {
    createdAt: string;
    id: string;
}

export interface IUserItemProps extends IUser {
    loading?: boolean;
}
