import { ChangeEvent, useState } from 'react';
import { LoginType } from 'types/auth.type';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { useNavigate } from 'react-router-dom';
import { LoginFeature } from 'features/auth/login.feature';
import * as S from './style';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginType>({
    username: '',
    password: '',
  });

  const { login } = LoginFeature({ loginData });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <S.LoginLayout>
      <S.Wrap>
        <S.LoginBox>
          <S.Title>로그인</S.Title>
          <S.SubTitle>
            학생회 계정이 없나요?{' '}
            <S.Join onClick={() => navigate('/join')}>계정만들기</S.Join>
          </S.SubTitle>
          <S.InputWrap>
            <Input
              desc="아이디"
              placeholder="아이디를 입력해주세요"
              type="text"
              name="username"
              value={loginData.username}
              onChange={onChange}
            />
            <Input
              desc="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              name="password"
              value={loginData.password}
              onChange={onChange}
            />
          </S.InputWrap>
          <Button
            onClick={login}
            option="FILLED"
            padding="12px 24px"
            width="225px"
            value="로그인"
          />
        </S.LoginBox>
      </S.Wrap>
    </S.LoginLayout>
  );
};

export default Login;
