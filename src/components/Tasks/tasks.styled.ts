import styled from 'styled-components';

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-top: 13px;
  caret-color: #0013FF;

  @media (max-width: 425px) {
    gap: 20px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const AllButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isDisabled'
})<{ isActive: boolean, isDisabled: boolean }>`
  border: 2px solid #30324B;
  border-radius: 10px;
  width: fit-content;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  color: #30324B;

  ${({ isActive }) => isActive && `
    background-color: #30324B;
    border: none;
    color: #fff;
  `}

  ${({ isDisabled }) => isDisabled && `
    background-color: #F2F3F5;
    border: none
    color: #DEDEDE;
  `}

  &:hover {
    background-color: #575A84;
    color: #fff;
    border: 2px solid #30324B;
  }
  
  &:focus {
    background-color: #30324B;
    color: #fff;
    border: 2px solid #A4A4A4;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    padding: 8px 15px;
    border: 1px solid #30324B;
  }
`;

export const DoneButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isDisabled'
})<{ isActive: boolean, isDisabled: boolean }>`
  border: 2px solid #6AD400;
  border-radius: 10px;
  width: fit-content;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  color: #6AD400;

  ${({ isActive }) => isActive && `
    background-color: #6AD400;
    border: none;
    color: #fff;
  `}

  ${({ isDisabled }) => isDisabled && `
    background-color: #F2F3F5;
    border: none
    color: #DEDEDE;
  `}

  &:hover {
    background-color: #CEFF9D;
    color: #6AD400;
    border: 2px solid #6AD400;
  }
  
  &:focus {
    background-color: #6AD400;
    color: #fff;
    border: 2px solid #CEFF9D;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    border: 1px solid #6AD400;
    padding: 8px 15px;
  }
`;

export const NotDoneButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isDisabled'
})<{ isActive: boolean, isDisabled: boolean }>`
  border: 2px solid #FF2F2F;
  border-radius: 10px;
  min-width: fit-content;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  color: #FF2F2F;
  text-white-space: nowrap;

  ${({ isActive }) => isActive && `
    background-color: #FF2F2F;
    border: none;
    color: #fff;
  `}

  ${({ isDisabled }) => isDisabled && `
    background-color: #F2F3F5;
    border: none
    color: #DEDEDE;
  `}

  &:hover {
    background-color: #FFB8B8;
    color: #FF2F2F;
    border: 2px solid #FF2F2F;
  }
  
  &:focus {
    background-color: #FF2F2F;
    color: #fff;
    border: 2px solid #FFB8B8;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    border: 1px solid #FF2F2F;
    padding: 8px 15px;
  }
`;

export const TasksList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;

   @media (max-width: 425px) {
     gap: 15px;
   }
`;