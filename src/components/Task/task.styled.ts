import styled from 'styled-components';

export const TaskContainer = styled.div`
  width: 100%;
  min-height: 124px;
  height: auto;
  box-shadow: 0px 4px 17.8px rgba(0, 0, 0, 0.1);
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 425px) {
    gap: 10px;
  }
`;

export const TaskTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 425px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

export const InputCheckbox = styled.input`
  min-width: 18px;
  min-height: 18px;
  border: 2px solid #A4A4A4;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    min-width: 20px;
    min-height: 20px;
    background-color: #6AD400;
    border: none;
  }

  &:hover {
    background-color: #D9D9D9;
    border: 2px solid #A4A4A4;
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #30324B;
  text-ellipsis: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  overflow: hidden;

  ${InputCheckbox}:checked + & {
    text-decoration: line-through;
  }
`;

export const TaskBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const TaskActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
    self-align: flex-end;
  align-self: flex-end;
`;

export const IconBtnEdit = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isDisabled'
  })<{ isActive: boolean, isDisabled: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;

  ${({ isActive }) => isActive && `
    svg path {
    stroke: #0013FF;
    }
  `}

  ${({ isDisabled }) => isDisabled && `
    svg path {
      stroke: #A4A4A4;
    }
  `}

  &:focus {
    background-color: #A4A4A4;
  }

  &:hover svg {
    stroke: #606492;
  }

  &:focus svg {
    stroke: #30324B;
  }
`;

export const IconBtnRemove = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isDisabled'
  })<{ isDisabled: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;

  ${({ isDisabled }) => isDisabled && `
    svg path {
      fill: #A4A4A4;
    }
  `}

  &:focus {
    background-color: #A4A4A4;
  }

  &:hover svg path {
    fill: #FF9B9B;
  }
`;

export const Input = styled.input`
  height: 25px;
  border-bottom: 1px solid #A4A4A4;
  overflow: hidden;
  max-width: 90%;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const SaveButton = styled.button`
  color: #0013FF;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

`;