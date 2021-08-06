import React from 'react';
import { PostInterface } from "../../interfaces/interfaces";

export const SingleBlog: React.FC<PostInterface> = (
  { image, createdAt, title, description, id}) => {

  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="single-blog">
        <div className="single-blog-img">
          <a href={`/${id}`}><img src={image} alt={title} /></a>
        </div>

        <div className="blog-meta">
          <span className="comments-type">
            <i className="bi bi-chat" />
            <a href={`/${id}`}>{Math.ceil(Math.random() * 100)} comments</a>
          </span>

          <span className="date-type">
            <i className="bi bi-calendar" />{createdAt}
          </span>
        </div>

        <div className="blog-text">
          <h4>
            <a href={`/${id}`}>{title}</a>
          </h4>
          <p>
            {description}
          </p>
        </div>

        <span>
          <a href={`/${id}`} className="ready-btn">Read more</a>
        </span>
      </div>
    </div>
  )
}
