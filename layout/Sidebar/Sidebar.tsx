import { ReactElement } from 'react';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.css';

export const Sidebar = ({ ...props }: SidebarProps): ReactElement => (
  <>
    <div {...props}>Sidebar</div>
  </>
);
