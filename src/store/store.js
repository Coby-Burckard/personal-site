import {configureStore, combineReducers } from '@reduxjs/toolkit'
import defaultReducer from '../reducers/defaultReducer'

const combinedReducer = combineReducers(defaultReducer)

export default configureStore({
  reducer: combinedReducer
})