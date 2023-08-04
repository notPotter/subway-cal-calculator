import { styled } from "styled-components";
import { BigInput } from "../components/BigInput";
import colors from "../constants/colors";
import Badge from "../components/Badge";
import { MENUS } from "../constants/menus";
import { useState } from "react";

export function MenusSelect() {
  const [menu, setMenu] = useState<string>("");

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(e.target.value);
  };

  return (
    <S.Container>
      <S.Title>메뉴를 선택해주세요</S.Title>
      <BigInput
        placeholder="메뉴 입력"
        value={menu}
        onChange={handleChangeMenu}
      />
      <S.BadgeContainer>
        {Object.values(MENUS)
          .filter((menus) => menus.includes(menu))
          .map((menus) => (
            <Badge key={menus}>{menus}</Badge>
          ))}
      </S.BadgeContainer>
    </S.Container>
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
    gap: 5px;
  `,
};
