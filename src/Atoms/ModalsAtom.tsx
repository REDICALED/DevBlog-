import { atom } from 'recoil';

export const CheckModalState = atom<boolean>({
  key: 'CheckModalState',
  default: false,
});

export const PostImageModalState = atom<boolean>({
  key: 'PostImageModalState',
  default: false,
});