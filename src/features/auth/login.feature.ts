import { useNavigate } from 'react-router-dom';
import { AUTHORITY } from 'constants/user.constant';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { useMutation } from 'react-query';
import { loginUser } from 'apis/auth.api';
import { useSetRecoilState } from 'recoil';
import { adminState } from 'atoms/admin.atom';
import { LoginType } from 'types/auth.type';
import { useSuccesToast } from 'hooks/useToast';

interface LoginFeatureType {
  loginData: LoginType;
}

export const LoginFeature = ({ loginData }: LoginFeatureType) => {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(adminState);

  const loginMutate = useMutation(loginUser, {
    onSuccess: (res) => {
      const {
        accessToken,
        refreshToken,
        user: { authority },
      } = res;
      localStorage.setItem(AUTHORITY, authority);
      localStorage.setItem(ACCESS_KEY, accessToken);
      localStorage.setItem(REFRESH_KEY, refreshToken);
      setUserData({ accessToken, refreshToken, authority });
      useSuccesToast('로그인 성공');
      navigate('/main/genrate');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const login = () => {
    loginMutate.mutate(loginData);
  };

  return { login };
};
