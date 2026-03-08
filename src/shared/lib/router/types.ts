import React from 'react';
import { IndexRouteObject } from 'react-router-dom';

export type TCompoundPage<T = {}, K = {}> = React.FC<T> & {
    loader: IndexRouteObject['loader'];
};
