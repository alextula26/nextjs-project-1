/* eslint-disable no-underscore-dangle */
import {
  GetStaticPropsContext, GetStaticProps, GetStaticPaths,
} from 'next';
import { ReactElement } from 'react';
import axios from 'axios';

import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from '../../interfaces/menu';
import { TopPageModel, TopLevelCategory } from '../../interfaces/page';
import { ProductModel } from '../../interfaces/product';

import { withLayout } from '../../layout/Layout';

function Course({
  menu, firstCategory, page, products,
}: CourseProps): ReactElement {
  return (
    <div style={{ margin: '10px' }}>
      {products && products.length}
    </div>
  );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory: TopLevelCategory.Courses,
  });

  return {
    paths: menu.flatMap((m) => m.pages.map((p) => `/courses/${p.alias}`)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory: TopLevelCategory.Courses,
  });

  const { data: page } = await axios.get<TopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`);

  const { data: products } = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
    category: page.category,
    limit: 10,
  });

  return {
    props: {
      menu,
      firstCategory: TopLevelCategory.Courses,
      page,
      products,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  page: TopPageModel
  products: ProductModel[]
}
