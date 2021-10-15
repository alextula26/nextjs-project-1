import { ReactElement } from 'react';
import cn from 'classnames';
import { TagProps } from './Tag.props';

import styles from './Tag.module.css';

export const Tag = ({
  size = 's', variant = 'primary', href, children, className, ...props
}: TagProps): ReactElement => {
  const tagClasss = cn(className, styles.tag,
    { [styles.s]: size === 's' },
    { [styles.m]: size === 'm' },
    { [styles.ghost]: variant === 'ghost' },
    { [styles.red]: variant === 'red' },
    { [styles.gray]: variant === 'gray' },
    { [styles.green]: variant === 'green' },
    { [styles.primary]: variant === 'primary' });

  return (
    <div
      className={tagClasss}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
