import { atom } from 'recoil';

export const OpeningState = atom<Boolean>({
  key: 'OpeningState',
  default: true,
});
