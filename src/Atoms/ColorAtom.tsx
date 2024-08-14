import { atom } from 'recoil';

export const colorIndexState = atom<number>({
  key: 'colorIndexState',
  default: 0,
});
