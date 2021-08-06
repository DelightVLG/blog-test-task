import React from 'react';
import { Header } from '../../components/Header/Header';
import { BlogHeader } from '../../components/BlogHeader/BlogHeader';
import { BlogMain } from '../../components/BlogMain/BlogMain';

export const BlogsPage: React.FC = () => {

  return (
    <>
      <Header />
      <main id="main">
        <BlogHeader />
        <BlogMain />
      </main>
    </>
  )
}
