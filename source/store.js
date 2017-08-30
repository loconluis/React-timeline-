import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer';

// const logger = store => next => (action) => {
//   console.debug('estado actual', store.getState());
//   console.log('acción', action);
//   const result = next(action);
//   console.debug('estado nuevo', store.getState());
//   return result;
// };

const store = createStore(
  reducer,
  applyMiddleware(
    createLogger(),
    thunk,
  ),
);

export default store;
