import { InputProps } from "./types"
import { InputStyle } from "./styles"

export default function Input({ type, placeholder, value, onChange, borderRadius, background, padding, border}:InputProps) {
  return <InputStyle value={value} type={type} placeholder={placeholder} onChange={onChange} borderRadius={borderRadius} background={background} padding={padding} border={border} />
}