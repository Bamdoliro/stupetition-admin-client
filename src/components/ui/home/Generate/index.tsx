import { useState } from 'react';
import { GenerateType } from 'types/auth.type';
import GenerateContent from './GenrateContent';
import SchoolContent from './SchoolContent';

const Generate = () => {
  const [generateData, setGenerateData] = useState<GenerateType>({
    username: '',
    password: '',
    rePassword: '',
    schoolId: 0,
    schoolName: '',
  });
  const [searchSchoolIsOpen, setSearchSchoolOpen] = useState(true);

  return searchSchoolIsOpen ? (
    <GenerateContent
      setSearchSchoolOpen={setSearchSchoolOpen}
      setGenerateData={setGenerateData}
      generateData={generateData}
    />
  ) : (
    <SchoolContent
      setSearchSchoolOpen={setSearchSchoolOpen}
      setGenerateData={setGenerateData}
      generateData={generateData}
    />
  );
};

export default Generate;
