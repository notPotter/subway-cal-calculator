import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Header } from "./components/Header";

function App() {
  return (
    <S.App>
      <Header />
      <Outlet />
    </S.App>
  );
}

const S = {
  App: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  `,
};

export default App;
