import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./task.reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        taskReducer: taskReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})
sagaMiddleware.run(rootSaga);


export default store;