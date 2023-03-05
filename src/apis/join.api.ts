import { customAxios } from 'lib/axios/customAxios';
import { JoinType } from 'types/auth.type';

export const joinStudentCouncil = async ({
  username,
  password,
  schoolId,
}: JoinType) => {
  await customAxios.post('/user', { username, password, schoolId });
};
