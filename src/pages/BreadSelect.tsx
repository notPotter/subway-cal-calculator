import { styled } from "styled-components";
import colors from "../constants/colors";
import { useRecoilState } from "recoil";
import { breadState } from "../atoms/atoms";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BREADS } from "../constants/menus";
import Badge from "../components/Badge";
import { BigInput } from "../components/BigInput";
import { food } from "../types/types";
import { Header } from "../components/Header";
import { ROUTE_PATH } from "../constants/route";

export function BreadSelect() {
  const [breadValue, setBreadValue] = useState("");
  const [bread, setBread] = useRecoilState(breadState);
  const navigate = useNavigate();

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreadValue(e.target.value);
  };

  const handleClickMenu = (selectedMenu: food) => {
    setBread(selectedMenu);
    setBreadValue("");
    navigate(ROUTE_PATH.CHEESE);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>빵을 골라주세요</S.Title>
        <BigInput placeholder="빵 이름 입력" value={breadValue} onChange={handleChangeMenu} />
        <S.BadgeContainer>
          {Object.values(BREADS)
            .filter((breads) => breads.name.includes(breadValue))
            .map((breads) => (
              <Badge key={breads.name} selected={bread.name === breads.name} onClick={() => handleClickMenu(breads)}>
                {breads.name}
              </Badge>
            ))}
        </S.BadgeContainer>
      </S.Container>
    </>
  );
}

const S = {
  Title: styled.h1`
    margin-bottom: 40px;
    font-size: 26px;
    line-height: 35px;
    word-break: keep-all;
    white-space: pre-line;
    font-weight: bold;
    color: ${colors.grey900};
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  `,

  BadgeContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `,
};
