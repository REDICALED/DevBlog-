import { atom } from 'recoil';

export const DarkmodeSwitchState = atom<boolean>({
  key: 'DarkmodeSwitchState',
  default: true,
});
