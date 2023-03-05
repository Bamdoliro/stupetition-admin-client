import { Dispatch, SetStateAction } from 'react';

export interface LoginType {
  username: string;
  password: string;
}

export interface GeneratorType {
  username: string;
  password: string;
  rePassword: string;
  schoolId: number;
  schoolName: string;
}

export interface GeneratorContentsPropsType {
  setSearchSchoolOpen: Dispatch<SetStateAction<boolean>>;
  setGeneratorData: Dispatch<SetStateAction<GeneratorType>>;
  generatorData: GeneratorType;
}
