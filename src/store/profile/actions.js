import { TOGGLE_VISBLE_PROFILE, UPDATE_PROFILE } from "./types";

export const toggleVisibleProfile = () => {
  return { type: TOGGLE_VISBLE_PROFILE };
};

export const updateProfile = (profile) => {
  return { type: UPDATE_PROFILE, payload: profile };
};
