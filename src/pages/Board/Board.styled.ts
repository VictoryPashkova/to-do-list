import styled from 'styled-components';

export const BoardContainer = styled.div`
  margin-left: 0;
  margin-right: 0;
  padding: 100px;
  width: 100%;
  color: #30324B;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 50px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 16px;
    gap: 17px;
  }
`;

export const TypographyH1 = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-align: center;
  font-size: 96px;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;