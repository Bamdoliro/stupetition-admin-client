import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { AUTHORITY } from 'constants/user.constant';
import { atom } from 'recoil';
import { AdminDataType } from 'types/user.type';

export const adminState = atom<AdminDataType>({
  key: 'admin',
  default: {
    accessToken: localStorage.getItem(ACCESS_KEY) || '',
    refreshToken: localStorage.getItem(REFRESH_KEY) || '',
    authority: localStorage.getItem(AUTHORITY) || '',
  },
});
