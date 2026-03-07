export const getRoute = (path: string) => {
  const withoutFirstSlash = path.replace(/^\//, '');
  return {
    path: `/${withoutFirstSlash}`,
    relative: withoutFirstSlash,
  };
};
