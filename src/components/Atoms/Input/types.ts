import React from 'react';

export interface InputProps {
  type: string,
  value: string,
  placeholder: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  borderRadius?: string,
  background?: string,
  padding?: string
  border?: string
}