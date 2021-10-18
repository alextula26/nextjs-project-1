import { ReactElement } from 'react';
import cn from 'classnames';
import { CardProps } from './Card.props';

import styles from './Card.module.css';

export const Card = ({
  variant = 'white', children, className, ...props
}: CardProps): ReactElement => {
  const cardClasss = cn(className, styles.card,
    { [styles.blue]: variant === 'blue' });

  return (
    <div className={cardClasss} {...props}>
      {children}
    </div>
  );
};
