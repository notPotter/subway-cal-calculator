import { css, styled } from "styled-components";
import { colors } from "../constants/colors";

export const Button = styled.button<{ disabled: boolean }>`
  box-sizing: border-box;
  position: fixed;
  bottom: 20px;
  width: calc(100% - 40px);
  height: 56px;
  border: none;
  border-radius: 16px;
  background-color: ${colors.yellow100};
  color: ${colors.white};
  font-size: 18px;
  font-weight: 600;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colors.grey100};
      color: ${colors.grey300};
    `}
`;
