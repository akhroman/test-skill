import { IUser } from '@/entities/users/model/types';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface IUserFormContext {
    isOpen: boolean;
    currentUser?: IUser;
    openCreate: () => void;
    openEdit: (user: IUser) => void;
    close: () => void;
}

const UserFormContext = createContext<IUserFormContext | undefined>(undefined);

export const UserFormContextProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<IUser>();

    const openCreate = useCallback(() => {
        setIsOpen(true);
        setCurrentUser(undefined);
    }, []);

    const openEdit = useCallback((user: IUser) => {
        setIsOpen(true);
        setCurrentUser(user);
    }, []);

    const close = () => {
        setIsOpen(false);
        setCurrentUser(undefined);
    };

    return (
        <UserFormContext.Provider value={{ isOpen, currentUser, close, openCreate, openEdit }}>
            {children}
        </UserFormContext.Provider>
    );
};

export const useUserFormContext = () => {
    const context = useContext(UserFormContext);
    if (!context) {
        throw new Error('useUserFormContext должен использоваться внутри UserFormContext');
    }
    return context;
};