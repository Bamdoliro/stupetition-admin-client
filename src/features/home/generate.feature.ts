import { useMutation } from 'react-query';
import { generateStudentCouncil } from 'apis/generate.api';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { GeneratorType } from 'types/auth.type';

interface GeneratorFeatureType {
  setGeneratorData: Dispatch<SetStateAction<GeneratorType>>;
  generatorData: GeneratorType;
}

export const GeneratorFeature = ({
  setGeneratorData,
  generatorData,
}: GeneratorFeatureType) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(generateStudentCouncil, {
    onSuccess: () => {
      alert('회원가입 성공');
      navigate('/login');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const generate = () => {
    const { password, rePassword, schoolId } = generatorData;
    if (password === rePassword) {
      if (schoolId !== 0) {
        mutate(generatorData);
      } else {
        alert('학교를 선택 해주세요');
      }
    } else {
      alert('비밀번호가 맞지 않습니다');
    }
    setGeneratorData({
      username: '',
      password: '',
      rePassword: '',
      schoolId: 0,
      schoolName: '',
    });
  };

  return { generate };
};
