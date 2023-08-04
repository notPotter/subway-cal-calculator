import { HTMLAttributes, ReactNode } from "react";
import { styled } from "styled-components";
import colors from "../constants/colors";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

function Badge({ children, ...rest }: Props) {
  return (
    <Container aria-label="badge" {...rest}>
      {children}
    </Container>
  );
}

const Container = styled.span`
  display: inline-flex;
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
  line-height: 1.333;
  border-radius: 10px;
  font-weight: bold;
  color: ${colors.grey700};
  background-color: ${colors.greyOpacity200};
`;

export default Badge;
