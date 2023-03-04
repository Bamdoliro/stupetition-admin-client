import { JoinContentsPropsType } from 'types/auth.type';
import Input from 'components/common/Input';
import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import { JoinFeature } from 'features/home/generator.feature';
import { ChangeEvent } from 'react';
import * as S from './style';

const JoinContent = ({
  setSearchSchoolOpen,
  setJoinData,
  joinData,
}: JoinContentsPropsType) => {
  const { join } = JoinFeature({ setJoinData, joinData });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJoinData({ ...joinData, [name]: value });
  };

  return (
    <S.JoinContent>
      <S.Wrap>
        <S.Title>학생회 회원가입</S.Title>
        <S.InputWrap>
          <Input
            desc="학생회 아이디 입력"
            placeholder="학생회 아이디를 입력해주세요"
            type="email"
            name="email"
            value={joinData.email}
            onChange={onChange}
          />
          <Input
            desc="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={joinData.password}
            onChange={onChange}
          />
          <Input
            desc="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            name="rePassword"
            value={joinData.rePassword}
            onChange={onChange}
          />
          <SearchInput
            width="100%"
            desc="학교"
            placeholder="학교를 입력해주세요"
            type="text"
            name="schoolId"
            value={joinData.schoolName}
            onFocus={() => setSearchSchoolOpen(false)}
          />
        </S.InputWrap>
        <Button
          onClick={join}
          option="FILLED"
          padding="12px 22px"
          width="174px"
          value="회원가입"
        />
      </S.Wrap>
    </S.JoinContent>
  );
};

export default JoinContent;
