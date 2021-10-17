/* eslint-disable no-underscore-dangle */
import { ReactElement, useContext } from 'react';
import cn from 'classnames';

import { AppContext } from '../../context/app.context';

import styles from './Menu.module.css';

export const Menu = (): ReactElement => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((item) => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
      </ul>
    </div>
  );
};
