import styled from 'styled-components';


export const Form = styled.form`
  border-radius: 21px;
  box-shadow: 0px 4px 17.8px rgba(0, 0, 0, 0.1);
  border: 1px solid #F5F5F5;
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  @media (max-width: 768px) {
    height: 70px;
    padding: 0px 15px;
    border-radius: 15px;
  }

  @media (max-width: 425px) {
    height: 52px;
    padding: 0px 10px;
    border-radius: 10px;
  }
`;

export const InputForm = styled.input`
  font-size: 24px;
  font-weight: 400;
  width: 90%;

  &::placeholder {
    color: #A4A4A4;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const SubmitIconBtn = styled.button`
  width: 60px;
  height: 50px;
  border: 1px solid #30324B;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #30324B;

    img {
      filter: brightness(0) invert(1);
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 40px;

    img {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 425px) {
    width: 38.4px;
    height: 32px;
    border-radius: 6.4px;

    img {
      width: 19.2px;
      height: 19.2px;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #FF2F2F;
  font-size: 12px;  
`;