import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import musicReducer from './musicSlice' //import reducer
import createSagaMiddleware from 'redux-saga';
import songSaga from '../saga/musicSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default configureStore({ 
reducer: {
  music: musicReducer,
}, //add reducers here 
middleware: [sagaMiddleware]
})

sagaMiddleware.run(songSaga);
