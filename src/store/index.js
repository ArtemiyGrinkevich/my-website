import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clockReducer from './slices/clockSlice'

const rootReducer = combineReducers({
    clock: clockReducer
})

export function setupStore(){
    return configureStore({
        reducer:rootReducer
    })
}