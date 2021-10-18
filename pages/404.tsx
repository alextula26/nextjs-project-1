import React, { ReactElement } from 'react';
import { Heading } from '../components';
import { withLayout } from '../layout/Layout';

export function Error404(): ReactElement {
  return (
    <>
      <Heading tag="h1">Ошибка 404</Heading>
    </>
  );
}

export default withLayout(Error404);
