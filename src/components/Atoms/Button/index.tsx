import { ButtonProps } from './types'

export default function Button({children, type, onClick, href}:ButtonProps) {
  const buttonType = {
    type: type,
    onClick: onClick,
  }
  const anchorType = {
    as: "a",
    href: href,
  }

  return <button { ...href ? anchorType : buttonType }>{children}</button>
}