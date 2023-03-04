import { customAxios } from 'lib/axios/customAxios';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { useNavigate } from 'react-router-dom';

export const tokenExpired = async () => {
  const navigate = useNavigate();
  try {
    const { data } = await customAxios.put('/auth', null, {
      headers: {
        'Refresh-Token': `${localStorage.getItem(REFRESH_KEY)}`,
      },
    });
    localStorage.setItem(ACCESS_KEY, data.accessToken);
  } catch (err) {
    console.log(err);
    alert('세션이 만료되었습니다');
    localStorage.clear();
    navigate('/login');
  }
};
