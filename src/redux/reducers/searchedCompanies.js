import {
    ERROR_OCCURRED,
    GET_SEARCHED_COMPANIES_SUCCESS,
    IS_LOADED,
    IS_LOADING,
  } from '../reducers/actions';
  
  const initialState = {
    searchedCompanies: [],
    isLoading: false,
    errorMessage: '',
    noResults: false,
  };
  
  const searchedCompaniesReducer = (state = initialState, action) => {
    switch (action.type) {
      case IS_LOADING:
        return {
          ...state,
          isLoading: action.payload,
          errorMessage: '',
          searchedCompanies: [],
          noResults: false,
        };
  
      case IS_LOADED:
        return {
          ...state,
          isLoading: action.payload,
        };
  
      case GET_SEARCHED_COMPANIES_SUCCESS:
        if (action.payload.length === 0) {
          return {
            ...state,
            noResults: true,
          };
        } else {
          return {
            ...state,
            searchedCompanies: action.payload,
          };
        }
  
      case ERROR_OCCURRED:
        return {
          ...state,
          errorMessage: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default searchedCompaniesReducer;