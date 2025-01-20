import { atom } from 'recoil';
import {persistAtom} from './persist';


export const SuggestPostState = atom<any>({
  key: 'SuggestPostState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});


