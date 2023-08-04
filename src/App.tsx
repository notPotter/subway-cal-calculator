import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

function App() {
  return (
    <S.App>
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
    padding: 0 12px;
  `,
};

export default App;
