export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const GET_SEARCHED_COMPANIES_SUCCESS = 'GET_SEARCHED_COMPANIES_SUCCESS';
export const GET_SEARCHED_COMPANIES_ERROR = 'GET_SEARCHED_COMPANIES_ERROR';
export const IS_LOADING = 'IS_LOADING';
export const IS_LOADED = 'IS_LOADED';
export const ERROR_OCCURRED = 'ERROR_OCCURRED';

export const addToFavouriteAction = (data) => ({
  type: ADD_TO_FAVOURITE,
  payload: data.company_name,
});

export const removeFromFavouriteAction = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
});

export const getSearchedCompaniesAction = (query) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });

    const baseEndpoint =
      'https://strive-benchmark.herokuapp.com/api/jobs?search=';

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20');
      if (response.ok) {
        const { data } = await response.json();

        dispatch({
          type: GET_SEARCHED_COMPANIES_SUCCESS,
          payload: data,
        });
        dispatch({
          type: IS_LOADED,
          payload: false,
        });
      } else {
        throw new Error('Error fetching results');
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ERROR_OCCURRED,
        payload: error.message,
      });
    }
  };
};