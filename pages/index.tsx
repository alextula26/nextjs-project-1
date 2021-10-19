/* eslint-disable no-underscore-dangle */
import { GetStaticProps } from 'next';
import React, { ReactElement, useState } from 'react';
import axios from 'axios';

import { MenuItem } from '../interfaces/menu';

import {
  Button, Heading, Input, Paragraph, Rating, Search, Tag, Textarea,
} from '../components';

import { withLayout } from '../layout/Layout';

function Home({ menu, firstCategory }: HomeProps): ReactElement {
  const [rating, setRating] = useState<number>(4);

  return (
    <div style={{ margin: '10px' }}>
      <Heading tag="h1">Заголовок 1</Heading>
      <Heading tag="h2">Заголовок 2</Heading>
      <Heading tag="h3">Заголовок 3</Heading>

      <hr />

      <Button variant="primary" arrow="right">Click me</Button>
      <Button variant="ghost" arrow="down">Click me</Button>

      <hr />

      <Paragraph>Дефолт</Paragraph>
      <Paragraph size="s">Малый</Paragraph>
      <Paragraph size="m">Средний</Paragraph>
      <Paragraph size="l">Большой</Paragraph>

      <hr />

      <Tag size="s">Малый</Tag>
      <Tag size="m">Средний</Tag>
      <Tag variant="ghost">ghost</Tag>
      <Tag variant="red">red</Tag>
      <Tag variant="gray">gray</Tag>
      <Tag variant="green">green</Tag>
      <Tag variant="primary">primary</Tag>

      <hr />

      <Rating rating={rating} isEditable setRating={setRating} />

      <hr />

      <ul>
        {menu.map((item) => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
      </ul>

      <hr />

      <Input placeholder="Name" />
      <Textarea placeholder="Name" />

    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const response = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory,
  });

  const menu = response.data;

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
