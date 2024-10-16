import { RootState } from './store';

export const selectTasks = (state: RootState) => state.tasks.tasks;