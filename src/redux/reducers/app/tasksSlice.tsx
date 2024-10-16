import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../../types';

const initialState: TasksState = {
  tasks: [],
};

type TasksState = {
  tasks: Task[];
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TasksState>) => {
      return { ...state, ...action.payload };
    },
    addTask: (state, action: PayloadAction<Task>) => {
      const updatedTasks = [action.payload, ...state.tasks ];
      return { ...state, tasks: updatedTasks };
    },
    editTask: (state, action: PayloadAction<{id: string, description: string}>) => {
      const { id } = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, ...action.payload };
        }
        return task;
      });
      return { ...state, tasks: updatedTasks };
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      console.log(action.payload)
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      return { ...state, tasks: updatedTasks };
    },
    setTaskState: (state, action: PayloadAction<{id: string, isDone: boolean}>) => {
      const { id, isDone } = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone };
        }
        return task;
      });
      return { ...state, tasks: updatedTasks };
    }
  },
});

export const { setTasks, addTask, editTask, removeTask, setTaskState } = tasksSlice.actions;

export default tasksSlice.reducer;