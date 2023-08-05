import { styled } from "styled-components";
import logo from "../assets/subway_logo.png";
import arrowLeft from "../assets/arrow_left.png";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/route";

export function Header() {
  const navigate = useNavigate();
  const location = window.location.pathname;

  return (
    <S.Header>
      <S.Image
        src={arrowLeft}
        onClick={() => {
          if (location === BASE_URL) return;
          navigate(-1);
        }}
      />
      <S.Image src={logo} />
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  Image: styled.img`
    width: 20px;
  `,
};
