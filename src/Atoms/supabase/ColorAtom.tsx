import { atom } from 'recoil';

export const PostFilterState = atom<string[]>({
  key: 'PostFilterState',
  default: ["all"],
});
