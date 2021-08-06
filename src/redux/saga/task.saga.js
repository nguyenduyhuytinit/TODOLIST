import axios from 'axios';
import { put, takeEvery, /* takeLatest */ } from 'redux-saga/effects'
import { TASK_ACTION } from "../constants/task.constant";

function* getTaskListSaga(action) {
    try {
        const result = yield axios.get('http://localhost:3004/taskList/');
        yield put({ type: TASK_ACTION.GET_TASK_SUCCESS, payload: result.data });
    } catch (e) {
        yield put({ type: TASK_ACTION.GET_TASK_FAIL, payload: e.message });
    }
}

function* createTaskListSaga(action) {
    try {
        const result = yield axios.post('http://localhost:3004/taskList/', action.payload);
        yield put({ type: TASK_ACTION.CREATE_TASK_SUCCESS, payload: result.data });
    } catch (e) {
        yield put({ type: TASK_ACTION.CREATE_TASK_FAIL, payload: e.message });
    }
}

function* deleteTaskListSaga(action) {
    const id = action.payload.id
    try {
        const result = yield axios.delete(`http://localhost:3004/taskList/${id}`);
        yield put({ type: TASK_ACTION.DELETE_TASK_SUCCESS, payload: result.data });
    } catch (e) {
        yield put({ type: TASK_ACTION.DELETE_TASK_FAIL, payload: e.message });
    }
}

function* editTaskListSaga(action) {
    const { id, data } = action.payload;
    try {
        const result = yield axios.patch(`http://localhost:3004/taskList/${id}`, data);
        yield put({ type: TASK_ACTION.EDIT_TASK_SUCCESS, payload: result.data });
    } catch (e) {
        yield put({ type: TASK_ACTION.EDIT_TASK_FAIL, payload: e.message });
    }
}

export default function* taskSaga() {
    yield takeEvery(TASK_ACTION.GET_TASK, getTaskListSaga);
    yield takeEvery(TASK_ACTION.CREATE_TASK, createTaskListSaga);
    yield takeEvery(TASK_ACTION.DELETE_TASK, deleteTaskListSaga);
    yield takeEvery(TASK_ACTION.EDIT_TASK, editTaskListSaga);

}