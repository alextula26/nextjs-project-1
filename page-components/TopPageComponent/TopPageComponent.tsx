/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import { ReactElement } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';

import styles from './TopPageComponent.module.css';
import {
  Heading, HhData, Tag, Advantages, Paragraph,
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

    {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
    {page.advantages && page.advantages.length > 0 && (
      <>
        <Heading tag="h2">Преимущества</Heading>
        <Advantages advantages={page.advantages} />
      </>
    )}

    {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

    <Heading tag="h2">Получаемые навыки</Heading>
    {page.tags && page.tags.map((tag) => <Tag key={tag} size="s">{tag}</Tag>)}
  </div>
);
