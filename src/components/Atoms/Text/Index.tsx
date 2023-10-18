import { TextTypes } from "./types";
import { TextStyle } from "./styles";

export default function Text({children, color, fontSize}:TextTypes) {
  return <TextStyle fontSize={fontSize} color={color}>{children}</TextStyle>
}