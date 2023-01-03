import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let devTool = composeWithDevTools(applyMiddleware(thunk));
if (process.env.NODE_ENV !== 'development') {
  devTool = applyMiddleware(thunk);
}

const store = createStore(rootReducer, devTool);

const persistor = persistStore(store as any);

export default store;
export { persistor };
