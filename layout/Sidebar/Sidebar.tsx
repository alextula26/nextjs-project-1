import React, { ReactElement } from 'react';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';

import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): ReactElement => (
  <div className={cn(className, styles.sidebar)} {...props}>
    <Logo className={styles.logo} />
    <div>поиск</div>
    <Menu />
  </div>
);
