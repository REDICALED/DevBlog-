import { atom } from 'recoil';

export const CategoryAllState = atom<number>({
  key: 'CategoryAllState',
  default: 0, //0: full, 1: mixed, 2: empty
});
