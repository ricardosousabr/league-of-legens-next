import React, { ReactNode } from 'react';

export interface InputProps extends IntrinsicElements.input DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    disabled: boolean,
  type: string,
  value: string,
  placeholder: string,
}