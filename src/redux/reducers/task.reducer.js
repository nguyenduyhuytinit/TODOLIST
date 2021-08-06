import { createReducer } from "@reduxjs/toolkit";
import { TASK_ACTION } from "../constants/task.constant";

const initialState = {
    taskList: []
}

const taskReducer = createReducer(initialState, {
    [TASK_ACTION.GET_TASK_SUCCESS]: (state, action) => {
        return {
            ...state,
            taskList: [
                ...action.payload
            ]
        }
    },
    [TASK_ACTION.CREATE_TASK_SUCCESS]: (state, action) => {
        return {
            ...state,
            taskList: [
                ...state.taskList, action.payload,
            ]
        }
    },
    [TASK_ACTION.DELETE_TASK_SUCCESS]: (state, action) => {
        const id = action.payload.id
        const newList = [...state.taskList];
        const taskListIndex = newList.findIndex((itemId) => itemId.id === id)
        newList.splice(taskListIndex, 1)
        return {
            ...state,
            taskList: newList,
        }
    },
    [TASK_ACTION.EDIT_TASK_SUCCESS]: (state, action) => {
        const id = action.payload.id;
        const task = action.payload.task;
        const newList = [...state.taskList];
        const taskListIndex = newList.findIndex((itemId) => itemId.id === id)
        newList.splice(taskListIndex, 1, task)
        return {
            ...state,
            taskList: newList
        }
    },
})
export default taskReducer;