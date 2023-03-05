import { useState } from 'react';
import { GeneratorType } from 'types/auth.type';
import GeneratorContent from './GenratorContent';
import SchoolContent from './SchoolContent';

const Generator = () => {
  const [generatorData, setGeneratorData] = useState<GeneratorType>({
    username: '',
    password: '',
    rePassword: '',
    schoolId: 0,
    schoolName: '',
  });
  const [searchSchoolIsOpen, setSearchSchoolOpen] = useState(true);

  return searchSchoolIsOpen ? (
    <GeneratorContent
      setSearchSchoolOpen={setSearchSchoolOpen}
      setGeneratorData={setGeneratorData}
      generatorData={generatorData}
    />
  ) : (
    <SchoolContent
      setSearchSchoolOpen={setSearchSchoolOpen}
      setGeneratorData={setGeneratorData}
      generatorData={generatorData}
    />
  );
};

export default Generator;
