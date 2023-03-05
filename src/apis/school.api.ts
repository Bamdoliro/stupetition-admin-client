import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { SchoolDataType } from 'types/school.type';

export const searchSchool = async (searchWord: string) => {
  const { data } = await customAxios.get('/school/search', {
    params: {
      q: searchWord,
    },
  });
  return data;
};

export const createSchool = async (schoolData: SchoolDataType) => {
  await customAxios.post('/school', schoolData, authorization());
};
