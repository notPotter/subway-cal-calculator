import { BigInput } from "../components/BigInput";
import { Badge } from "../components/Badge";
import { SAUCES } from "../constants/menus";
import { Header } from "../components/Header";
import { useSauceSelect } from "../hooks/useSauceSelect";
import { BadgeContainer, Container, Title } from "../styles/styles";
import { Button } from "../components/Button";

export function SauceSelect() {
  const { sauce, sauceValue, handleClickMenu, handleChangeMenu, handleClickButton } = useSauceSelect();

  return (
    <>
      <Header />
      <Container>
        <Title>소스를 골라주세요</Title>
        <BigInput placeholder="소스 이름 입력" value={sauceValue} onChange={handleChangeMenu} />
        <BadgeContainer>
          {Object.values(SAUCES)
            .filter((sauces) => sauces.name.includes(sauceValue))
            .map((sauces) => (
              <Badge
                key={sauces.name}
                selected={sauce.map((sauce) => sauce.name).includes(sauces.name)}
                onClick={() => handleClickMenu(sauces)}
              >
                {sauces.name}
              </Badge>
            ))}
        </BadgeContainer>
        <Button disabled={sauce.length === 0} onClick={handleClickButton}>
          확인
        </Button>
      </Container>
    </>
  );
}
