import { useMutation } from 'react-query';
import { generateStudentCouncil } from 'apis/generate.api';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { GenerateType } from 'types/auth.type';

interface GenerateFeatureType {
  setGenerateData: Dispatch<SetStateAction<GenerateType>>;
  generateData: GenerateType;
}

export const GenerateFeature = ({
  setGenerateData,
  generateData,
}: GenerateFeatureType) => {
  const { mutate } = useMutation(generateStudentCouncil, {
    onSuccess: () => {
      alert('회원가입 성공');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const generate = () => {
    const { password, rePassword, schoolId } = generateData;
    if (password === rePassword) {
      if (schoolId !== 0) {
        mutate(generateData);
      } else {
        alert('학교를 선택 해주세요');
      }
    } else {
      alert('비밀번호가 맞지 않습니다');
    }
    setGenerateData({
      username: '',
      password: '',
      rePassword: '',
      schoolId: 0,
      schoolName: '',
    });
  };

  return { generate };
};
