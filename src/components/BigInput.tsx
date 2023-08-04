import { styled } from "styled-components";
import colors from "../constants/colors";
import { ChangeEvent, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function BigInput({ placeholder, value, onChange }: Props) {
  return (
    <S.BigInput placeholder={placeholder} value={value} onChange={onChange} />
  );
}

const S = {
  BigInput: styled.input`
    width: 100%;
    color: ${colors.grey900};
    height: 42px;
    font-weight: 500;
    font-size: 24px;
    border-radius: 1px;
    caret-color: ${colors.blue400};
    outline: none;
    border: 0 none;
    border-bottom: 2px solid ${colors.grey300};
  `,
};
