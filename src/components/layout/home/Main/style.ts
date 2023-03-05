import styled from 'styled-components';
import { color } from 'styles/theme.style';

export const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.gray300};
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 146px;
  width: 798px;
  height: 100%;
  background-color: ${color.white};
`;
