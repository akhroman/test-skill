export const usersKeys = {
    all: ['users'] as const,
    detail: (id: string) => [...usersKeys.all, id] as const
};
