import React from 'react';
import { PostInterface } from '../../interfaces/interfaces';

export const SingleBlogFull: React.FC<PostInterface> = (
  {image, title, description, preview, createdAt}) => {
  return (
    <div className="col-md-8 col-sm-8 col-xs-12">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <article className="blog-post-wrapper">
            <div className="post-thumbnail">
              <img src={image} alt={title}/>
            </div>
            <div className="post-information">
              <h2>Blog image post layout</h2>
              <div className="entry-meta">
                <span className="author-meta"><i className="bi bi-person" /> <a href="#">admin</a></span>
                <span><i className="bi bi-clock" />{createdAt}</span>
                <span className="tag-meta">
                        <i className="bi bi-folder" />
                        <a href="!#">painting</a>,
                        <a href="!#">work</a>
                      </span>
                <span>
                        <i className="bi bi-tags" />
                        <a href="!#">tools</a>,
                        <a href="!#"> Humer</a>,
                        <a href="!#">House</a>
                      </span>
                <span><i className="bi bi-chat" /> <a href="#">6 comments</a></span>
              </div>
              <div className="entry-content">
                <p>{description}</p>
                <blockquote>
                  <p>{preview}</p>
                </blockquote>
                <p>{description}</p>
              </div>
            </div>
          </article>
          <div className="clear" />
          <div className="single-post-comments">
            <div className="comments-area">
              <div className="comments-heading">
                <h3>6 comments</h3>
              </div>
              <div className="comments-list">
                <ul>
                  <li className="threaded-comments">
                    <div className="comments-details">
                      <div className="comments-list-img">
                        <img src="assets/img/blog/b02.jpg" alt="post-author" />
                      </div>
                      <div className="comments-content-wrap">
                              <span>
                                <b><a href="#">demo</a></b>
                                Post author
                                <span className="post-time">October 6, 2014 at 4:25 pm</span>
                                <a href="#">Reply</a>
                              </span>
                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="comments-details">
                      <div className="comments-list-img">
                        <img src="assets/img/blog/b02.jpg" alt="post-author" />
                      </div>
                      <div className="comments-content-wrap">
                              <span>
                                <b><a href="#">admin</a></b>
                                Post author
                                <span className="post-time">October 6, 2014 at 6:18 pm </span>
                                <a href="#">Reply</a>
                              </span>
                        <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor.
                          Fusce ac sapien bibendum, scelerisque libero nec</p>
                      </div>
                    </div>
                  </li>
                  <li className="threaded-comments">
                    <div className="comments-details">
                      <div className="comments-list-img">
                        <img src="assets/img/blog/b02.jpg" alt="post-author" />
                      </div>
                      <div className="comments-content-wrap">
                              <span>
                                <b><a href="#">demo</a></b>
                                Post author
                                <span className="post-time">October 6, 2014 at 7:25 pm</span>
                                <a href="#">Reply</a>
                              </span>
                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
