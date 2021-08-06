import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { BlogHeader } from '../../components/BlogHeader/BlogHeader';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { RecentPosts } from '../../components/RecentPosts/RecentPosts';
import { Categories } from '../../components/Categories/Categories';
import { Archive } from '../../components/Archive/Archive';
import { PopularTags } from '../../components/PopularTags/PopularTags';
import { SingleBlogFull } from "../../components/SingleBlogFull/SingleBlogFull";
import {getPostByID} from "../../api/MainApi";
import {PostInterface} from "../../interfaces/interfaces";

export const SingleBlogPage: React.FC = () => {

  // @ts-ignore
  const [currentPost, setCurrentPots] = useState<PostInterface>([]);

  const history = useHistory();
  const blogID = history.location.pathname;

  useEffect(() => {
    getPostByID(blogID)
      .then((post) => setCurrentPots(post))
      .catch((err) => console.error(err));
  }, [blogID])

  return (
    <>
      <Header />
      <main id="main">
        <BlogHeader />
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

              <SingleBlogFull
                image={currentPost.image}
                title={currentPost.title}
                preview={currentPost.preview}
                description={currentPost.description}
                createdAt={currentPost.createdAt} />

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
