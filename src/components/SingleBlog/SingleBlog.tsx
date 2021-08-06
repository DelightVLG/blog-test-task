import React from 'react';
import { Link } from 'react-router-dom';
import { PostInterface } from "../../interfaces/interfaces";

export const SingleBlog: React.FC<PostInterface> = (
  { image, createdAt, title, description, id}) => {

  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="single-blog">
        <div className="single-blog-img">
          <Link to={`/${id}`}><img src={image} alt={title} /></Link>
        </div>

        <div className="blog-meta">
          <span className="comments-type">
            <i className="bi bi-chat" />
            <Link to={`/${id}`}>{Math.ceil(Math.random() * 100)} comments</Link>
          </span>

          <span className="date-type">
            <i className="bi bi-calendar" />{createdAt}
          </span>
        </div>

        <div className="blog-text">
          <h4>
            <Link to={`/${id}`}>{title}</Link>
          </h4>
          <p>
            {description}
          </p>
        </div>

        <span>
          <Link to={`/${id}`} className="ready-btn">Read more</Link>
        </span>
      </div>
    </div>
  )
}
