import { Outlet } from 'react-router-dom';
import * as S from './style';

const Layout = () => {
  return (
    <S.Layout>
      <S.Wrap>
        <S.ContentBox>
          <Outlet />
        </S.ContentBox>
      </S.Wrap>
    </S.Layout>
  );
};

export default Layout;
