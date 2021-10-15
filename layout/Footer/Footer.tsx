import { ReactElement } from 'react';
import cn from 'classnames';
import { FooterProps } from './Footer.props';

import styles from './Footer.module.css';

export const Footer = ({ ...props }: FooterProps): ReactElement => (
  <>
    <div {...props}>Footer</div>
  </>
);
