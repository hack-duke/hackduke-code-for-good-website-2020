import { createStore, combineReducers } from 'redux';

import pageSettingsReducer from './reducers/pageSettings';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      pageSettings: pageSettingsReducer
    })
  );

  return store;
};

export default configureStore;
