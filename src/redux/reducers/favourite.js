import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from '../reducers/actions';

const initialState = {
  favCompanies: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favCompanies: state.favCompanies.concat(action.payload),
      };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favCompanies: state.favCompanies.filter((comp) => {
          return comp !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default favouritesReducer;