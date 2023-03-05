import { Dispatch, SetStateAction } from 'react';

export interface LoginType {
  username: string;
  password: string;
}

export interface GenerateType {
  username: string;
  password: string;
  rePassword: string;
  schoolId: number;
  schoolName: string;
}

export interface GenerateContentsPropsType {
  setSearchSchoolOpen: Dispatch<SetStateAction<boolean>>;
  setGenerateData: Dispatch<SetStateAction<GenerateType>>;
  generateData: GenerateType;
}
