import { Outlet } from 'react-router-dom';
import * as S from './style';

const BaseLayout = () => {
  return (
    <S.BaseLayout>
      <S.Wrap>
        <S.MainBox>
          <Outlet />
        </S.MainBox>
      </S.Wrap>
    </S.BaseLayout>
  );
};

export default BaseLayout;
