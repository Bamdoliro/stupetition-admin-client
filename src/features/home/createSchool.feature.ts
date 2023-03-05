import { createSchool } from 'apis/school.api';
import { useMutation } from 'react-query';
import { SchoolDataType } from 'types/school.type';

export const CreateSchoolFeature = (schooData: SchoolDataType) => {
  const { mutate } = useMutation(createSchool, {
    onSuccess: () => {
      alert('햑교 생성 성공');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const create = () => {
    mutate(schooData);
  };

  return { create };
};
