import { ReactElement } from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';

import styles from './Button.module.css';

export const Button = ({
  variant, children, arrow = 'none', className, ...props
}: ButtonProps): ReactElement => {
  const buttonClasss = cn(className, styles.button,
    { [styles.primary]: variant === 'primary' },
    { [styles.ghost]: variant === 'ghost' });

  const arrowClasss = cn(styles.arrow,
    { [styles.right]: arrow === 'right' },
    { [styles.down]: arrow === 'down' });

  return (
    <button
      type="button"
      className={buttonClasss}
      {...props}
    >
      {children}
      {arrow !== 'none' && <span className={arrowClasss}><ArrowIcon /></span>}
    </button>
  );
};
