import { createStore } from 'redux';
import { combineReducers } from 'redux';
import uiReducer from './reducers/uiReducer'; // Update the path to your uiReducer

// Combine reducers (in case you have more in the future)
const rootReducer = combineReducers({
  uiReducer,
  // Add other reducers here
});

// Create the store
const store = createStore(rootReducer);

export default store;
