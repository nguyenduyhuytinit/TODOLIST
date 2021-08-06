import { createAction } from "@reduxjs/toolkit";
import { TASK_ACTION } from '../constants';

export const getTaskListAction = createAction(TASK_ACTION.GET_TASK)
export const createTaskListAction = createAction(TASK_ACTION.CREATE_TASK)
export const deleteTaskListAction = createAction(TASK_ACTION.DELETE_TASK)
export const editTaskListAction = createAction(TASK_ACTION.EDIT_TASK)