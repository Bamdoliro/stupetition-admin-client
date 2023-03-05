import { Outlet } from 'react-router-dom';
import * as S from './style';

const MainLayout = () => {
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

export default MainLayout;
