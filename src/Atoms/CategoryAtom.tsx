import { atom } from 'recoil';

export const CategoryState = atom<string>({
  key: 'CategoryState',
  default: 'All',
});
