import { useRecoilState } from "recoil";
import { breadState } from "../atoms/atoms";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BREADS } from "../constants/menus";
import { Badge } from "../components/Badge";
import { BigInput } from "../components/BigInput";
import { Food } from "../types/types";
import { Header } from "../components/Header";
import { ROUTE_PATH } from "../constants/route";
import { BadgeContainer, Container, Title } from "../styles/styles";

export function BreadSelect() {
  const [breadValue, setBreadValue] = useState("");
  const [bread, setBread] = useRecoilState(breadState);
  const navigate = useNavigate();

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreadValue(e.target.value);
  };

  const handleClickMenu = (selectedMenu: Food) => {
    setBread(selectedMenu);
    setBreadValue("");
    navigate(ROUTE_PATH.CHEESE);
  };

  return (
    <>
      <Header />
      <Container>
        <Title>빵을 골라주세요</Title>
        <BigInput placeholder="빵 이름 입력" value={breadValue} onChange={handleChangeMenu} />
        <BadgeContainer>
          {Object.values(BREADS)
            .filter((breads) => breads.name.includes(breadValue))
            .map((breads) => (
              <Badge key={breads.name} selected={bread.name === breads.name} onClick={() => handleClickMenu(breads)}>
                {breads.name}
              </Badge>
            ))}
        </BadgeContainer>
      </Container>
    </>
  );
}
