import { TCompoundPage } from './types';

export const pageLoader = <T extends Record<string, TCompoundPage>>(
  importFn: () => Promise<T>,
  exportName: keyof T,
) => {
  return async () => {
    const module = await importFn();
    const Component = module[exportName];
    return { Component, loader: Component.loader };
  };
};
