import { ReactElement } from 'react';
import { TopLevelCategory } from './page';

export interface Id {
  secondCategory: string
}

export interface Page {
  alias: string
  title: string
  _id: string
  category: string
}

export interface MenuItem {
  _id: Id
  isOpened?: boolean
  pages: Page[]
}

export interface FirstLevelMenuItem {
  route: string
  name: string
  icon: ReactElement
  id: TopLevelCategory
}
