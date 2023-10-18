import { InputProps } from "./types"

export default function Input({ type, placeholder, value, onChange}:InputProps) {
  return <input value={value} type={type} placeholder={placeholder} onChange={onChange} />
}