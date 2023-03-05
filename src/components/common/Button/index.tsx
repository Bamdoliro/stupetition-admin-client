import { ButtonHTMLAttributes } from 'react';
import * as S from './style';

export type ButtonOptionType = 'UNFILLED' | 'FILLED' | 'SCARCE_FILLED';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding: string;
  width: string;
  option: ButtonOptionType;
}

const Button = ({
  onClick,
  padding,
  width,
  option,
  value,
}: ButtonPropsType) => {
  switch (option) {
    case 'FILLED':
      return (
        <S.FilledButton style={{ padding, width }} onClick={onClick}>
          <S.FilledButtonText>{value}</S.FilledButtonText>
        </S.FilledButton>
      );
    case 'UNFILLED':
      return (
        <S.UnfilledButton style={{ padding, width }} onClick={onClick}>
          <S.UnfilledButtonText>{value}</S.UnfilledButtonText>
        </S.UnfilledButton>
      );
    default:
      return (
        <S.FilledButton style={{ padding, width }} onClick={onClick}>
          <S.FilledButtonText>{value}</S.FilledButtonText>
        </S.FilledButton>
      );
  }
};

export default Button;
