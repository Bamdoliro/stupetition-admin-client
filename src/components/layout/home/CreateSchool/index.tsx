import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { ChangeEvent, useState } from 'react';
import * as S from './style';

interface SchoolDataType {
  name: string;
  abbreviation: string;
}

const CreateSchool = () => {
  const [schoolData, setSchoolData] = useState<SchoolDataType>({
    name: '',
    abbreviation: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSchoolData({ ...schoolData, [name]: value });
  };

  return (
    <S.CreateSchoolLayout>
      <S.Wrap>
        <S.Title>학교 생성</S.Title>
        <S.InputWrap>
          <Input
            desc="학교 이름 입력"
            placeholder="학교 이름을 입력해주세요"
            type="text"
            name="name"
            value={schoolData.name}
            onChange={onChange}
          />
          <Input
            desc="학교 약어 입력"
            placeholder="학교의 약어를 입력해주세요"
            type="text"
            name="abbreviation"
            value={schoolData.abbreviation}
            onChange={onChange}
          />
        </S.InputWrap>
        <Button
          onClick={() => console.log('생성')}
          option="FILLED"
          padding="12px 22px"
          width="174px"
          value="학교 생성"
        />
      </S.Wrap>
    </S.CreateSchoolLayout>
  );
};

export default CreateSchool;
