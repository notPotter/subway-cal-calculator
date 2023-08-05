import { useRecoilState } from "recoil";
import { breadState, cheeseState, menuState, sauceState } from "../atoms/atoms";
import { styled } from "styled-components";
import { colors } from "../constants/colors";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../constants/route";
import { Badge } from "../components/Badge";
import Logo from "../assets/subway_logo.png";
import Bread from "../assets/bread.png";
import Cheese from "../assets/cheese.png";
import Sauce from "../assets/sauce.png";

const EMPTY_VALUE = {
  name: "",
  kcal: 0,
  protein: 0,
  saturatedFat: 0,
  sugars: 0,
  sodium: 0,
};

export function Result() {
  const [menu, setMenu] = useRecoilState(menuState);
  const [bread, setBread] = useRecoilState(breadState);
  const [cheese, setCheese] = useRecoilState(cheeseState);
  const [sauce, setSauce] = useRecoilState(sauceState);
  const sauceNames = Object.values(sauce).map((sauces) => sauces.name);
  const navigate = useNavigate();
  const kcal = menu.kcal + bread.kcal + cheese.kcal + sauce.reduce((acc, cur) => acc + cur.kcal, 0);
  const protein = menu.protein + bread.protein + cheese.protein + sauce.reduce((acc, cur) => acc + cur.protein, 0);
  const saturatedFat = menu.saturatedFat + bread.saturatedFat + cheese.saturatedFat + sauce.reduce((acc, cur) => acc + cur.saturatedFat, 0);
  const sugars = menu.sugars + bread.sugars + cheese.sugars + sauce.reduce((acc, cur) => acc + cur.sugars, 0);
  const sodium = menu.sodium + bread.sodium + cheese.sodium + sauce.reduce((acc, cur) => acc + cur.sodium, 0);

  const handleClickHome = () => {
    setMenu({ ...EMPTY_VALUE, img: "", description: "" });
    setBread(EMPTY_VALUE);
    setCheese(EMPTY_VALUE);
    setSauce([]);
    navigate(ROUTE_PATH.HOME, { replace: true });
  };

  console.log(menu);

  return (
    <S.Container>
      <S.Header>
        <S.Image src={Logo} onClick={handleClickHome} />
      </S.Header>

      <S.MenuImage src={menu.img} />
      <S.Title>{menu.name}</S.Title>
      <S.Description>{menu.description}</S.Description>

      <S.BadgeContainer>
        <S.Badge>
          <S.Image src={Bread} />
          {bread.name}
        </S.Badge>
        <S.Badge>
          <S.Image src={Cheese} />
          {cheese.name}
        </S.Badge>
        {sauceNames.map((sauceName) => (
          <S.Badge>
            <S.Image src={Sauce} />
            {sauceName}
          </S.Badge>
        ))}
      </S.BadgeContainer>

      <S.ResultContainer>
        <S.KcalInfo style={{ marginBottom: 20 }}>{Math.floor(kcal)}kcal</S.KcalInfo>
        <S.ResultBox>
          <S.Description>단백질</S.Description>
          <S.KcalInfo>{Math.floor(protein)}g</S.KcalInfo>
        </S.ResultBox>
        <S.ResultBox>
          <S.Description>포화지방</S.Description>
          <S.KcalInfo>{Math.floor(saturatedFat)}g</S.KcalInfo>
        </S.ResultBox>
        <S.ResultBox>
          <S.Description>당류</S.Description>
          <S.KcalInfo>{Math.floor(sugars)}g</S.KcalInfo>
        </S.ResultBox>
        <S.ResultBox>
          <S.Description>나트륨</S.Description>
          <S.KcalInfo>{Math.floor(sodium)}mg</S.KcalInfo>
        </S.ResultBox>
      </S.ResultContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,

  Header: styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  `,

  Image: styled.img`
    width: 20px;
  `,

  MenuImage: styled.img`
    width: 200px;
    margin-bottom: -10px;
  `,

  Title: styled.p`
    display: flex;
    margin: 0;
    font-size: 22px;
    line-height: 35px;
    word-break: keep-all;
    white-space: pre-line;
    font-weight: bold;
    color: ${colors.grey900};
  `,

  Description: styled.p`
    display: flex;
    margin: -5px;
    font-size: 16px;
    line-height: 25px;
    word-break: keep-all;
    white-space: pre-line;
    color: ${colors.grey700};
  `,

  BadgeContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 20px;
    justify-content: flex-start;
  `,

  Badge: styled(Badge)`
    border-radius: 20px;
    padding: 4px 8px 4px 4px;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.grey800};
    color: ${colors.white};
  `,

  ResultContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin-top: 40px;
    gap: 10px;
  `,

  ResultBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,

  KcalInfo: styled.p`
    display: flex;
    margin: 0;
    font-size: 25px;
    line-height: 35px;
    word-break: keep-all;
    white-space: pre-line;
    font-weight: 900;
    color: ${colors.yellow100};

    @font-face {
      font-family: "Subway";
      src: url("../assets/font/Subway.ttf") format("truetype");
    }
    font-family: "Subway";
  `,

  Name: styled.p`
    display: flex;
    margin: -5px;
    font-size: 16px;
    line-height: 25px;
    word-break: keep-all;
    white-space: pre-line;
  `,
};
