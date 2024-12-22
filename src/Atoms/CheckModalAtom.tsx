import { atom } from 'recoil';

export const CheckModalState = atom<boolean>({
  key: 'CheckModalState',
  default: false,
});
