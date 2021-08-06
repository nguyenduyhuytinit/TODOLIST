import { fork } from 'redux-saga/effects/';
import taskSaga from './task.saga';


export default function* rootSaga() {
    yield fork(taskSaga)

}