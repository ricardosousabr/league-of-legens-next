import styled from "styled-components";
import { InputProps } from "./types"

export const InputStyle = styled.input<InputProps>`
  border-radius: ${(p) => p.borderRadius};
  background: ${(p) => p.background} ;
  padding: ${(p) => p.padding};
  border: ${(p) => p.border};
  border-image: linear-gradient(45deg, #ffc600, #bf930d) 1;

  &:focus {
    border: ${(p) => p.border};
    border-image: linear-gradient(45deg, #ffc600, #bf930d) 1;
    outline: 0;
  }
`