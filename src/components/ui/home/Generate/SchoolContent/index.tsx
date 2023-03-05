import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import { ChangeEvent, useState } from 'react';
import { GenerateContentsPropsType } from 'types/auth.type';
import { SchoolFeature } from 'features/home/school.feature';
import Loading from 'pages/Loading';
import SchoolList from './SchoolList';
import * as S from './style';

const SchoolContent = ({
  setSearchSchoolOpen,
  setGenerateData,
  generateData,
}: GenerateContentsPropsType) => {
  const [searchWord, setSearchWord] = useState('');
  const { data, isLoading } = SchoolFeature(searchWord);

  const handleClickRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const schoolName = e.target.id;
    const schoolId = Number(e.target.value);
    setGenerateData({ ...generateData, schoolName, schoolId });
  };

  const cancel = () => {
    setSearchSchoolOpen(true);
    setGenerateData({
      username: '',
      password: '',
      rePassword: '',
      schoolId: 0,
      schoolName: '',
    });
  };

  console.log(data);

  return (
    <S.SchoolContent>
      <S.Wrap>
        <S.Title>학교 검색</S.Title>
        <SearchInput
          width="100%"
          placeholder="학교 검색"
          type="text"
          name="school"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <S.SchoolWrap>
          {isLoading && <Loading />}
          {data.map((item) => {
            return (
              <SchoolList
                key={item.id}
                name={item.name}
                id={item.id}
                abbreviation={item.abbreviation}
                onChange={handleClickRadio}
              />
            );
          })}
        </S.SchoolWrap>
        <S.ButtonWrap>
          <Button
            option="UNFILLED"
            width="50%"
            padding="12px 22px"
            value="취소"
            onClick={cancel}
          />
          <Button
            onClick={() => setSearchSchoolOpen(true)}
            option="FILLED"
            width="50%"
            padding="12px 22px"
            value="완료"
          />
        </S.ButtonWrap>
      </S.Wrap>
    </S.SchoolContent>
  );
};

export default SchoolContent;
