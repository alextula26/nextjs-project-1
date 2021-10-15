import {
  ReactElement, useEffect, useState, KeyboardEvent,
} from 'react';
import cn from 'classnames';
import { RatingProps } from './Rating.props';

import RatingIcon from './rating.svg';
import styles from './Rating.module.css';

export const Rating = ({
  isEditable = false, rating, setRating, ...props
}: RatingProps): ReactElement => {
  const [stars, setStars] = useState<ReactElement[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRaiting(rating);
  }, [rating]);

  const changeRating = (index: number): void => {
    if (!isEditable) {
      return;
    }

    constructRaiting(index);
  };

  const onClick = (index: number): void => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(index);
  };

  const handleSpace = (e: KeyboardEvent<SVGAElement>, index: number): void => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }

    setRating(index);
  };

  const constructRaiting = (currentRating: number): void => {
    const newStars = stars.map((star: ReactElement, index: number) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: index < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeRating(index + 1)}
        onMouseLeave={() => changeRating(rating)}
        onClick={() => onClick(index + 1)}
      >
        <RatingIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(e, index + 1)}
        />
      </span>
    ));

    setStars(newStars);
  };

  return (
    <div {...props}>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};
