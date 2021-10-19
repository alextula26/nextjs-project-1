import { ReactElement, useState } from 'react';
import cn from 'classnames';

import { useRouter } from 'next/router';
import { SearchProps } from './Search.props';

import { Input, Button } from '..';

import SearchIcon from './glass.svg';
import styles from './Search.module.css';

export const Search = ({ className, ...props }: SearchProps): ReactElement => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div
      className={cn(className, styles.search)}
      {...props}
    >
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <Button
        variant="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
