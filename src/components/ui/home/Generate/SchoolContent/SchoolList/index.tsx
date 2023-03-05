import { ChangeEventHandler } from 'react';
import * as S from './style';

interface SchoolListType {
  name: string;
  id: number;
  abbreviation: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SchoolList = ({ name, id, abbreviation, onChange }: SchoolListType) => {
  return (
    <S.SchoolList>
      <S.ListWrap>
        <S.SchoolName>{name}</S.SchoolName>
        <S.Abbreviation>{abbreviation}</S.Abbreviation>
      </S.ListWrap>
      <S.Button>
        <S.RadioInput
          type="radio"
          id={name}
          name="school-radio"
          value={id}
          onChange={onChange}
        />
        <S.RadioLabel htmlFor={name} />
      </S.Button>
    </S.SchoolList>
  );
};

export default SchoolList;
