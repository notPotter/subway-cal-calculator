import { styled } from "styled-components";
import { colors } from "../constants/colors";

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 26px;
  line-height: 35px;
  word-break: keep-all;
  white-space: pre-line;
  font-weight: bold;
  color: ${colors.grey900};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
