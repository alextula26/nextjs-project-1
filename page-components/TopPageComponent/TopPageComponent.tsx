/* eslint-disable no-underscore-dangle */
import { ReactElement } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';

import styles from './TopPageComponent.module.css';
import {
  Heading, HhData, Tag,
} from '../../components';
import { TopLevelCategory } from '../../interfaces/page';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): ReactElement => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <Heading tag="h1">{page.title}</Heading>
      <Tag color="grey" size="m">{products && products.length}</Tag>
      <span>Сортировка</span>
    </div>

    <div>
      {products && products.length && products.map((product) => <div key={product._id}>{product.title}</div>)}
    </div>

    <div className={styles.hhTitle}>
      <Heading tag="h2">
        Вакансии -
        {' '}
        {page.category}
      </Heading>
      <Tag variant="red" size="m">hh.ru</Tag>
    </div>

    {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
  </div>
);
