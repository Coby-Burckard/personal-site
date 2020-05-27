import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  me: null
}

export default createReducer(initialState, {
  NOTHING: (state, action) => {
    console.log('nothing')
  }
})