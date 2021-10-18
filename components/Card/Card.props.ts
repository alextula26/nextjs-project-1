import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  variant?: 'white' | 'blue'
}
