import { useState } from 'react';
import { JoinType } from 'types/auth.type';
import * as S from './style';

const Join = () => {
  const [joinData, setJoinData] = useState<JoinType>({
    username: '',
    password: '',
    rePassword: '',
    schoolId: 0,
    schoolName: '',
  });
  const [searchSchoolIsOpen, setSearchSchoolOpen] = useState(true);

  return (
    <S.MainLayout>
      <S.Wrap>
        <S.MainBox />
      </S.Wrap>
    </S.MainLayout>
  );
};

export default Join;
