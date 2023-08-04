import { styled } from "styled-components";
import logo from "../assets/subway_logo.png";

export function Header() {
  return (
    <S.Header>
      <S.Logo src={logo} />
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,

  Logo: styled.img`
    width: 20px;
  `,
};
