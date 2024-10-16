import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addBtn from '../../assets/images/addBtn.svg';
import { addTask } from '../../redux/reducers/app/tasksSlice';
import { getUniqueId  } from '../../utils/index';
import { Form, InputForm, SubmitIconBtn } from '../Form/form.styled';

type FormData = {
  task: string;
};

const AddTaskForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newTask = {
        id: getUniqueId(),
        ddl: 'Сегодня',
        isDone: false,
        description: data.task,
    }
    dispatch(addTask(newTask));
    reset();
  };
  
  return (  
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        type="text"
        placeholder="Создайте задачу"
        {...register('task', {
          required: 'Это поле обязательно',
          minLength: {
            value: 3,
            message: 'Строка должна содержать более 2 символов',
          },
        })}
        aria-label="Добавить задачу"
        aria-invalid={errors.task ? 'true' : 'false'}
        aria-required="true"
        aria-describedby="task-error"
        autoComplete="off"
        spellCheck="true"
        autoFocus
      />
      <SubmitIconBtn type="submit" aria-label="Добавить">
        <img src={addBtn} alt="Добавить" />
      </SubmitIconBtn>
    </Form>
  );
};

export default AddTaskForm;