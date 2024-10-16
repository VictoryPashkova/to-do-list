import React, { useEffect, useState } from 'react';
import Task from '../Task/task';
import { selectTasks } from '../../redux/reducers/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../redux/reducers/app/tasksSlice';
import { TasksContainer, FiltersContainer, AllButton, DoneButton, NotDoneButton, TasksList } from './tasks.styled';
import { Task as TaskTypes } from '../../types';

const mockData: TaskTypes[] = [
  { id: 'task_1', ddl: 'Cегодня', isDone: false, description: 'Завершить проект по настройке Vite для темы WordPress.' },
  { id: 'task_2', ddl: 'Cегодня', isDone: false, description: 'Завершить написание SEO-текста с учетом всех требований.' },
  { id: 'task_3', ddl: 'Cегодня', isDone: false, description: 'Продолжить работу над кубиком Рубика в Three.js' },
  { id: 'task_4', ddl: 'Cегодня', isDone: false, description: 'Просмотреть новые видео по интересующим темам на YouTube.' },
]

const Tasks: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'done' | 'notDone'>('all');
  const tasks = useSelector(selectTasks);

  const dispatch = useDispatch();
  useEffect(() => {
    if (mockData && !tasks) {
        dispatch(setTasks({ tasks: mockData }));
    }
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return filter === 'done' ? task.isDone === true : task.isDone === false;
  });

  return (      
    <TasksContainer>
      <FiltersContainer>
        <AllButton onClick={() => setFilter('all')} isActive={filter === 'all'} isDisabled={false}>Все</AllButton>
        <DoneButton onClick={() => setFilter('done')} isActive={filter === 'done'} isDisabled={false}>Выполнено</DoneButton>
        <NotDoneButton onClick={() => setFilter('notDone')} isActive={filter === 'notDone'} isDisabled={false}>Не выполнено</NotDoneButton>
      </FiltersContainer>
      <TasksList>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task}/>
        ))}
    </TasksList>
  </TasksContainer>
  );
};

export default Tasks;