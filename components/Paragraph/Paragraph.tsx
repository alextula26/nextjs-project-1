import { ReactElement } from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';

import styles from './Paragraph.module.css';

export const Paragraph = ({
  size = 'm', children, className, ...props
}: ParagraphProps): ReactElement => {
  const paragraphClasss = cn(className, styles.p,
    { [styles.s]: size === 's' },
    { [styles.m]: size === 'm' },
    { [styles.l]: size === 'l' });

  return (
    <p
      className={paragraphClasss}
      {...props}
    >
      {children}
    </p>
  );
};
