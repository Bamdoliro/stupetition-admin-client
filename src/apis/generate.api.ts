import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { GeneratorType } from 'types/auth.type';

export const generateStudentCouncil = async ({
  username,
  password,
  schoolId,
}: GeneratorType) => {
  await customAxios.post(
    '/user',
    { username, password, schoolId },
    authorization(),
  );
};
