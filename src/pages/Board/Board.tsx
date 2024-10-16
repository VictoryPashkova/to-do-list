import React from 'react';
import AddTaskForm from '../../components/Form/addTaskForm';
import Tasks from '../../components/Tasks/Tasks';
import { BoardContainer, TypographyH1 } from './Board.styled';

const Board: React.FC = () => {

  return (      
      <BoardContainer>
        <TypographyH1>
          Список дел
        </TypographyH1>
        <AddTaskForm />
        <Tasks />
      </BoardContainer>
  );
};

export default Board;