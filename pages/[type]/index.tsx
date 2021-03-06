import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React, { ReactElement } from 'react';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from '../../interfaces/menu';
import { withLayout } from '../../layout/Layout';
import { firstLevelMenu } from '../../helpers/helpers';

function Type({ menu, firstCategory }: TypeProps): ReactElement {
  return (
    <>
      Type:
      {' '}
      {firstCategory}
    </>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: firstLevelMenu.map((m) => `/${m.route}`),
  fallback: true,
});

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory: firstCategoryItem.id,
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
