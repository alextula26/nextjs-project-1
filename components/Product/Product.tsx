import React, { ReactElement } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { ProductProps } from './Product.props';
import { Rating } from '../Rating/Rating';
import {
  Button, Card, Divider, Tag,
} from '..';

import { devloOfNum, priceRu } from '../../helpers/helpers';

import styles from './Product.module.css';

export const Product = ({ product }: ProductProps): ReactElement => (
  <Card className={styles.product}>
    <div className={styles.logo}>
      <Image
        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
        alt={product.title}
        width={70}
        height={70}
      />
    </div>
    <div className={styles.title}>{product.title}</div>
    <div className={styles.price}>
      {priceRu(product.price)}
      {product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
    </div>
    <div className={styles.credit}>
      {priceRu(product.credit)}
      /
      <span className={styles.month}>мес</span>
    </div>
    <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
    <div className={styles.tags}>{product.categories.map((c) => <Tag key={c} className={styles.category} color="ghost">{c}</Tag>)}</div>
    <div className={styles.priceTitle}>цена</div>
    <div className={styles.creditTitle}>кредит</div>
    <div className={styles.rateTitle}>
      {product.reviewCount}
      {' '}
      {devloOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
    </div>
    <Divider className={styles.hr} />
    <div className={styles.description}>{product.description}</div>
    <div className={styles.feature}>
      {product.characteristics.map((characteristic) => (
        <div key={characteristic.name} className={styles.characteristic}>
          <span className={styles.characteristicName}>{characteristic.name}</span>
          <span className={styles.characteristicDots}></span>
          <span className={styles.characteristicValue}>{characteristic.value}</span>
        </div>
      ))}
    </div>
    <div className={styles.advBlock}>
      {product.advantages && (
      <div className={styles.advantages}>
        <div className={styles.advTitle}>Преимущества</div>
        <div>{product.advantages}</div>
      </div>
      )}
      {product.disadvantages && (
      <div className={styles.disadvantages}>
        <div className={styles.advTitle}>Недостатки</div>
        <div>{product.disadvantages}</div>
      </div>
      )}
    </div>
    <Divider className={cn(styles.hr, styles.hr2)} />
    <div className={styles.actions}>
      <Button variant="primary">Узнать подробнее</Button>
      <Button variant="ghost" arrow="right" className={styles.reviewButton}>Читать отзывы</Button>
    </div>
  </Card>
);
