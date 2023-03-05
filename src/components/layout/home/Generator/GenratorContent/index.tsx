import { GeneratorContentsPropsType } from 'types/auth.type';
import Input from 'components/common/Input';
import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import { GeneratorFeature } from 'features/home/generate.feature';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const GeneratorContent = ({
  setSearchSchoolOpen,
  setGeneratorData,
  generatorData,
}: GeneratorContentsPropsType) => {
  const navigate = useNavigate();
  const { generate } = GeneratorFeature({ setGeneratorData, generatorData });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGeneratorData({ ...generatorData, [name]: value });
  };

  return (
    <S.GeneratorContent>
      <S.Wrap>
        <S.Title>학생회 계정 생성</S.Title>
        <S.InputWrap>
          <Input
            desc="학생회 아이디 입력"
            placeholder="학생회 아이디를 입력해주세요"
            type="text"
            name="username"
            value={generatorData.username}
            onChange={onChange}
          />
          <Input
            desc="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={generatorData.password}
            onChange={onChange}
          />
          <Input
            desc="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            name="rePassword"
            value={generatorData.rePassword}
            onChange={onChange}
          />
          <SearchInput
            width="100%"
            desc="학교"
            placeholder="학교를 입력해주세요"
            type="text"
            name="schoolId"
            onFocus={() => setSearchSchoolOpen(false)}
          />
        </S.InputWrap>
        <S.ButtonWrap>
          <Button
            onClick={generate}
            option="FILLED"
            padding="12px 22px"
            width="50%"
            value="계정 생성"
          />
          <Button
            onClick={() => navigate('/main/create/school')}
            option="UNFILLED"
            width="50%"
            padding="12px 22px"
            value="학교 생성 바로가기"
          />
        </S.ButtonWrap>
      </S.Wrap>
    </S.GeneratorContent>
  );
};

export default GeneratorContent;
