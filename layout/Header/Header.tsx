import { ReactElement } from 'react';
import cn from 'classnames';
import { HeaderProps } from './Header.props';

import styles from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): ReactElement => (
  <>
    <div {...props}>Header</div>
  </>
);
