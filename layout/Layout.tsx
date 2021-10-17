import { FC, ReactElement } from 'react';
import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';

const Layout = ({ children }: LayoutProps): ReactElement => (
  <div className={styles.wrapper}>
    <Header className={styles.header}>Header</Header>
    <Sidebar className={styles.sidebar} />
    <main className={styles.main}>{children}</main>
    <Footer className={styles.footer}>Footer</Footer>
  </div>
);

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => function withLayoutWrapper(props: T): ReactElement {
  return (
    <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
      <Layout>
        <Component {...props} />
      </Layout>
    </AppContextProvider>
  );
};
