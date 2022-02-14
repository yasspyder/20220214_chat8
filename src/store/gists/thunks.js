import {
  getGistsStart,
  getGistsSuccess,
  getGistsError,
  searchGistsSuccess,
  searchGistsStart,
  searchGistsError,
} from "./actions";

// api.getPublicGistsApi
export const getGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsStart());

    const { data } = await api.getPublicGistsApi(page);

    dispatch(getGistsSuccess(data));
  } catch (e) {
    dispatch(getGistsError(e));
  }
};

export const searchGists = (name) => async (dispatch, _, api) => {
  try {
    dispatch(searchGistsStart());

    const { data } = await api.searchGistsByNameApi(name);

    dispatch(searchGistsSuccess(data));
  } catch (e) {
    dispatch(searchGistsError(e));
  }
};
