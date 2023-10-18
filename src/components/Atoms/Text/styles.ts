import styled from "styled-components";
import { TextTypes } from "./types";

export const TextStyle = styled.p<TextTypes>`
  color: ${(p) => p.color};
  font-size: ${(p) => p.fontSize};
`;
