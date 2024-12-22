import { atom } from 'recoil';

export const UuidState = atom<string>({
  key: 'UuidState',
  default: "",
});
