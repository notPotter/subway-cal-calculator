import { HTMLAttributes, ReactNode } from "react";
import { css, styled } from "styled-components";
import colors from "../constants/colors";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  selected?: boolean;
}

function Badge({ children, selected, ...rest }: Props) {
  return (
    <Container aria-label="badge" selected={selected ? selected : false} {...rest}>
      {children}
    </Container>
  );
}

const Container = styled.span<{ selected: boolean }>`
  display: inline-flex;
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
  line-height: 1.333;
  border-radius: 10px;
  font-weight: bold;
  color: ${colors.grey700};
  background-color: ${colors.greyOpacity200};

  ${({ selected }) =>
    selected &&
    css`
      color: ${colors.white};
      background-color: ${colors.green100};
    `}
`;

export default Badge;
