import { Outlet } from 'react-router-dom';
import * as S from './style';

const Main = () => {
  return (
    <S.MainLayout>
      <S.Wrap>
        <S.MainBox>
          <Outlet />
        </S.MainBox>
      </S.Wrap>
    </S.MainLayout>
  );
};

export default Main;
