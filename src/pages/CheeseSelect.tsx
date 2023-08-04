import { BigInput } from "../components/BigInput";
import { Badge } from "../components/Badge";
import { CHEESES } from "../constants/menus";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { cheeseState } from "../atoms/atoms";
import { Food } from "../types/types";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ROUTE_PATH } from "../constants/route";
import { BadgeContainer, Container, Title } from "../styles/styles";

export function CheeseSelect() {
  const [cheeseValue, setMenuValue] = useState("");
  const [cheese, setMenu] = useRecoilState(cheeseState);
  const navigate = useNavigate();

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuValue(e.target.value);
  };

  const handleClickMenu = (selectedMenu: Food) => {
    setMenu(selectedMenu);
    setMenuValue("");
    navigate(ROUTE_PATH.SAUCE);
  };

  return (
    <>
      <Header />
      <Container>
        <Title>치즈를 골라주세요</Title>
        <BigInput placeholder="치즈 이름 입력" value={cheeseValue} onChange={handleChangeMenu} />
        <BadgeContainer>
          {Object.values(CHEESES)
            .filter((cheeses) => cheeses.name.includes(cheeseValue))
            .map((cheeses) => (
              <Badge key={cheeses.name} selected={cheese.name === cheeses.name} onClick={() => handleClickMenu(cheeses)}>
                {cheeses.name}
              </Badge>
            ))}
        </BadgeContainer>
      </Container>
    </>
  );
}
