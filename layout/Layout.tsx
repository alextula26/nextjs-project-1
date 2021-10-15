import { ReactElement } from 'react';
import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutProps): ReactElement => (
  <>
    <Header>Header</Header>
    <Sidebar />
    <main>{children}</main>
    <Footer>Footer</Footer>
  </>
);
