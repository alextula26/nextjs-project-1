import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDataElement>, HTMLDataElement> {
  children: ReactNode
}
