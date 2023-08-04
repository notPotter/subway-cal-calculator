import { useRecoilState } from "recoil";
import { breadState, cheeseState, menuState, sauceState } from "../atoms/atoms";
import { styled } from "styled-components";
import colors from "../constants/colors";
import logo from "../assets/subway_logo.png";
import { Routes, useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../constants/route";

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
  const kcal =
    menu.kcal +
    bread.kcal +
    cheese.kcal +
    sauce.reduce((acc, cur) => acc + cur.kcal, 0);
  const protein =
    menu.protein +
    bread.protein +
    cheese.protein +
    sauce.reduce((acc, cur) => acc + cur.protein, 0);
  const saturatedFat =
    menu.saturatedFat +
    bread.saturatedFat +
    cheese.saturatedFat +
    sauce.reduce((acc, cur) => acc + cur.saturatedFat, 0);
  const sugars =
    menu.sugars +
    bread.sugars +
    cheese.sugars +
    sauce.reduce((acc, cur) => acc + cur.sugars, 0);
  const sodium =
    menu.sodium +
    bread.sodium +
    cheese.sodium +
    sauce.reduce((acc, cur) => acc + cur.sodium, 0);

  const handleClickHome = () => {
    setMenu(EMPTY_VALUE);
    setBread(EMPTY_VALUE);
    setCheese(EMPTY_VALUE);
    setSauce([]);
    navigate(ROUTE_PATH.HOME);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Image src={logo} onClick={handleClickHome} />
      </S.Header>
      <S.Title>
        메뉴는<S.name>{menu.name}</S.name>
      </S.Title>
      <S.Title>
        빵은 <S.yellowName>{bread.name}</S.yellowName>
      </S.Title>
      <S.Title>
        치즈는 <S.name>{cheese.name}</S.name>
      </S.Title>
      <S.Title>
        소스는
        <S.yellowName>{sauceNames.join(", ")}</S.yellowName>
      </S.Title>

      <S.ResultContainer>
        <S.Title>
          총 칼로리는 <S.name>{Math.floor(kcal)}</S.name>kcal
        </S.Title>
        <S.Title>
          단백질은 <S.yellowName>{Math.floor(protein)}</S.yellowName>g
        </S.Title>
        <S.Title>
          포화지방은 <S.name>{Math.floor(saturatedFat)}</S.name>g
        </S.Title>
        <S.Title>
          당류는 <S.yellowName>{Math.floor(sugars)}</S.yellowName>g
        </S.Title>
        <S.Title>
          나트륨은 <S.name>{Math.floor(sodium)}</S.name>mg
        </S.Title>
        <S.Title>입니다!</S.Title>
      </S.ResultContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  `,

  ResultContainer: styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
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

  Title: styled.p`
    display: flex;
    gap: 10px;
    margin: 0;
    margin-bottom: 5px;
    font-size: 20px;
    line-height: 35px;
    word-break: keep-all;
    white-space: pre-line;
    font-weight: bold;
    color: ${colors.grey900};
  `,

  name: styled.p`
    margin: 0;
    font-size: 22px;
    line-height: 35px;
    word-break: keep-all;
    white-space: pre-line;
    font-weight: bold;
    color: ${colors.green100};
  `,

  yellowName: styled.p`
    display: flex;
    margin: 0;
    font-size: 22px;
    line-height: 35px;
    word-break: keep-all;
    white-space: pre-line;
    font-weight: bold;
    color: ${colors.yellow100};
  `,
};
