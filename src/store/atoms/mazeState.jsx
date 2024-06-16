import { atom } from "recoil";

export const showSolution = atom({
  key: 'showSolution',
  default: false,
});

export const isMaze=atom({
    key:'isMaze',
    default:false
})
