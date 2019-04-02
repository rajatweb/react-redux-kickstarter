import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(() => 'ok', applyMiddleware(thunk))