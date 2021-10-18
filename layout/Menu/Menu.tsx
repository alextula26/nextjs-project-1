/* eslint-disable no-underscore-dangle */
import { ReactElement, useContext } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { AppContext } from '../../context/app.context';

import { FirstLevelMenuItem, Page } from '../../interfaces/menu';
import { TopLevelCategory } from '../../interfaces/page';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): ReactElement => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const renderFirstLevel = () => (
    <>
      {firstLevelMenu.map((menuItem) => (
        <div key={menuItem.route}>
          <Link href={`/${menuItem.route}`}>
            <a>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menuItem.id === firstCategory,
                })}
              >
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </a>
          </Link>
          {menuItem.id === firstCategory && renderSecondLevel(menuItem)}
        </div>
      ))}
    </>
  );

  const renderSecondLevel = (menuItem: FirstLevelMenuItem) => (
    <div className={styles.secondBlock}>
      {menu.map((m) => (
        <div key={m._id.secondCategory}>
          <div className={styles.secondLevel}>{m._id.secondCategory}</div>
          <div
            className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened,
            })}
          >
            {renderThirdLevel(m.pages, menuItem.route)}
          </div>
        </div>
      ))}
    </div>
  );

  const renderThirdLevel = (pages: Page[], route: string) => (
    pages.map((p) => (
      <Link href={`/${route}/${p.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}
        >
          {p.category}
        </a>
      </Link>
    ))
  );

  return (
    <div className={styles.menu}>
      {renderFirstLevel()}
    </div>
  );
};
