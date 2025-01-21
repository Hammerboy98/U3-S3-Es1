import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favouritesReducer from '../favourite';
import searchedCompaniesReducer from '../searchedCompanies';

const greatReducer = combineReducers({
  favourites: favouritesReducer,
  searched: searchedCompaniesReducer,
});

const store = configureStore({
  reducer: greatReducer,
});

export default store;