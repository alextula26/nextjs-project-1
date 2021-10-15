import { ReactElement, useState } from 'react';
import {
  Button, Heading, Paragraph, Rating, Tag,
} from '../components';

import { withLayout } from '../layout/Layout';

function Home(): ReactElement {
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
    </div>
  );
}

export default withLayout(Home);
