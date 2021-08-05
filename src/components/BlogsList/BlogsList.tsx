import React, { useEffect, useState } from 'react';
import { SingleBlog } from '../SingleBlog/SingleBlog';
import { PostInterface } from '../../interfaces/interfaces';
import { getAllPosts } from '../../api/MainApi';

export const BlogsList: React.FC = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const getPostsData = () => {
    getAllPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getPostsData();
  }, [])

  console.log(posts);
  return (
    <div className="col-md-8 col-sm-8 col-xs-12">
      <div className="row">
        {posts.map((post) =>  (
            <SingleBlog
              createdAt={post.createdAt}
              title={post.title}
              preview={post.preview}
              image={post.image}
              description={post.description}
              key={post.id} />
          ))}

        <div className="blog-pagination">
          <ul className="pagination">
            <li className="page-item"><a href="#" className="page-link">&lt;</a></li>
            <li className="page-item active"><a href="#" className="page-link">1</a></li>
            <li className="page-item"><a href="#" className="page-link">2</a></li>
            <li className="page-item"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">&gt;</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
