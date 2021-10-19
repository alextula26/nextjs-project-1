import { ReactElement } from 'react';
import cn from 'classnames';
import { TextareaProps } from './Textarea.props';

import styles from './Textarea.module.css';

export const Textarea = ({ className, ...props }: TextareaProps): ReactElement => (<textarea className={cn(className, styles.textarea)} {...props} />);
