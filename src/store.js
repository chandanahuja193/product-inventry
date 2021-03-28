import { applyMiddleware, createStore  } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

const initialState = {};

const middleware = [thunk]

export const store = createStore(rootReducer,initialState,composeWithDevTools(
  applyMiddleware(...middleware)
  ))
  
export const persistor = persistStore(store)

export default {
  persistor,
  store
};