import React, { ReactNode } from 'react';

 export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  as: string
}