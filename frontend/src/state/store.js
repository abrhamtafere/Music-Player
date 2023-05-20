import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './musicSlice' //import reducer

export default configureStore({ 
reducer: {
  music: musicReducer
} //add reducers here 
})

