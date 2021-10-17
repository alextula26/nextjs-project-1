import React, { ReactElement } from 'react';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps): ReactElement => (
  <>
    <div {...props}>
      <Menu />
    </div>
  </>
);
