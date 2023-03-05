import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { GenerateType } from 'types/auth.type';

export const generateStudentCouncil = async ({
  username,
  password,
  schoolId,
}: GenerateType) => {
  await customAxios.post(
    '/user',
    { username, password, schoolId },
    authorization(),
  );
};
