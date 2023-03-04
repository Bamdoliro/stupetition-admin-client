import { customAxios } from 'lib/axios/customAxios';
import { JoinType } from 'types/auth.type';

export const joinUser = async ({ email, password, schoolId }: JoinType) => {
  await customAxios.post('/user', { email, password, schoolId });
};
