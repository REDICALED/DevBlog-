import { atom } from 'recoil';
import {persistAtom} from './persist';

export const OpeningState = atom<Boolean>({
  key: 'OpeningState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const SupaArrayState = atom<any[]>({
  key: 'SupaArrayState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

