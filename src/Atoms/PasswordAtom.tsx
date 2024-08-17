import { atom } from 'recoil';

export const PasswordState = atom<boolean>({
  key: 'PasswordState',
  default: false,
});
