import React from 'react';
import { PostInterface } from "../../interfaces/interfaces";

export const SingleBlog: React.FC<PostInterface> = (
  { image, createdAt, title, description}) => {

  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="single-blog">
        <div className="single-blog-img">
          <a href="/"><img src={image} alt={title} /></a>
        </div>

        <div className="blog-meta">
          <span className="comments-type">
            <i className="bi bi-chat" />
            <a href="/">{Math.ceil(Math.random() * 100)} comments</a>
          </span>

          <span className="date-type">
            <i className="bi bi-calendar" />{createdAt}
          </span>
        </div>

        <div className="blog-text">
          <h4>
            <a href="/">{title}</a>
          </h4>
          <p>
            {description}
          </p>
        </div>

        <span>
          <a href="/" className="ready-btn">Read more</a>
        </span>
      </div>
    </div>
  )
}
