import { useState } from 'react';
import { JoinType } from 'types/auth.type';
import JoinContent from './JoinContent';
import SchoolContent from './SchoolContent';

const Join = () => {
  const [joinData, setJoinData] = useState<JoinType>({
    username: '',
    password: '',
    rePassword: '',
    schoolId: 0,
    schoolName: '',
  });
  const [searchSchoolIsOpen, setSearchSchoolOpen] = useState(true);

  return searchSchoolIsOpen ? (
    <JoinContent
      setSearchSchoolOpen={setSearchSchoolOpen}
      setJoinData={setJoinData}
      joinData={joinData}
    />
  ) : (
    <SchoolContent
      setSearchSchoolOpen={setSearchSchoolOpen}
      setJoinData={setJoinData}
      joinData={joinData}
    />
  );
};

export default Join;
