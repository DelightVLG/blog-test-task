import React from 'react';

export const SingleBlog: React.FC = () => {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="single-blog">
        <div className="single-blog-img">
          <a href="/">
            <img src="" alt="" />
          </a>
        </div>
        <div className="blog-meta">
                    <span className="comments-type">
                      <i className="bi bi-chat" />
                      <a href="/">13 comments</a>
                    </span>
          <span className="date-type">
                      <i className="bi bi-calendar" />2016-03-05 / 09:10:16
                    </span>
        </div>
        <div className="blog-text">
          <h4>
            <a href="/">Post my imagine Items</a>
          </h4>
          <p>
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
            sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit.
          </p>
        </div>
        <span>
                    <a href="/" className="ready-btn">Read more</a>
                  </span>
      </div>
    </div>
  )
}
