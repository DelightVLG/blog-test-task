import React, { useEffect, useState } from 'react';
import { SingleBlog } from '../SingleBlog/SingleBlog';
import { PostInterface } from '../../interfaces/interfaces';
import { getAllPosts } from '../../api/MainApi';
import { Pagination } from '../Pagination/Pagination';

export const BlogsList: React.FC = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(5);

  const getPostsData = () => {
    getAllPosts()
      .then((data) => {
        setLoading(true);
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getPostsData();
  }, [])

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="col-md-8 col-sm-8 col-xs-12">
      <div className="row">
        {loading ? (<h1>Loading...</h1>): currentPosts.map((post) =>  (
            <SingleBlog
              createdAt={post.createdAt}
              title={post.title}
              preview={post.preview}
              image={post.image}
              description={post.description}
              key={post.id}
              id={post.id}
            />
          ))}

        <div className="blog-pagination">
          <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>

      </div>
    </div>
  )
}
