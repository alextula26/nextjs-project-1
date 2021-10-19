import { ReactElement } from 'react';
import cn from 'classnames';
import { SortProps, SortEnum } from './Sort.props';

import SortIcon from './sort.svg';
import styles from './Sort.module.css';

export const Sort = ({
  sort, setSort, className, ...props
}: SortProps): ReactElement => (
  <div className={cn(className, styles.sort)} {...props}>
    <span
      onClick={() => setSort(SortEnum.Rating)}
      className={cn({
        [styles.active]: sort === SortEnum.Rating,
      })}
    >
      <SortIcon className={styles.sortIcon} />
      {' '}
      По рейтингу
    </span>

    <span
      onClick={() => setSort(SortEnum.Price)}
      className={cn({
        [styles.active]: sort === SortEnum.Price,
      })}
    >
      <SortIcon className={styles.sortIcon} />
      {' '}
      По цене
    </span>
  </div>
);
