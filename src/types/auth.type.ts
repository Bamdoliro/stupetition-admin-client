import { Dispatch, SetStateAction } from 'react';

export interface LoginType {
  username: string;
  password: string;
}

export interface JoinType {
  username: string;
  password: string;
  rePassword: string;
  schoolId: number;
  schoolName: string;
}

export interface JoinContentsPropsType {
  setSearchSchoolOpen: Dispatch<SetStateAction<boolean>>;
  setJoinData: Dispatch<SetStateAction<JoinType>>;
  joinData: JoinType;
}
