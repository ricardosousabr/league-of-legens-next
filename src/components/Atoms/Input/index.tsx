import { InputProps } from "./types"

export default function Input({ type, placeholder, value, disabled }:InputProps) {
  return <input disabled={disabled} value={value} type={type} placeholder={placeholder} />
}