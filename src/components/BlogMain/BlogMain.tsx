import React from 'react';

import { PopularTags } from '../PopularTags/PopularTags';
import { Archive } from '../Archive/Archive';
import { Categories } from '../Categories/Categories';
import { RecentPosts } from '../RecentPosts/RecentPosts';
import { SearchForm } from '../SearchForm/SearchForm';
import { BlogsList } from '../BlogsList/BlogsList';

export const BlogMain: React.FC = () => {
  return (
    <div className="blog-page area-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-4">
            <div className="page-head-blog">
              <SearchForm />
              <RecentPosts />
              <Categories />
              <Archive />
              <PopularTags />
            </div>
          </div>

          <BlogsList />

        </div>
      </div>
    </div>
  )
}
