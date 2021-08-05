import React from 'react';

export const RecentPosts: React.FC = () => {
  return (
    <div className="single-blog-page">
      <div className="left-blog">
        <h4>recent post</h4>
        <div className="recent-post">
          <div className="recent-single-post">
            <div className="post-img">
              <a href="#">
                <img src="assets/img/blog/1.jpg" alt="" />
              </a>
            </div>
            <div className="pst-content">
              <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
            </div>
          </div>
          <div className="recent-single-post">
            <div className="post-img">
              <a href="#">
                <img src="assets/img/blog/2.jpg" alt="" />
              </a>
            </div>
            <div className="pst-content">
              <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
            </div>
          </div>

          <div className="recent-single-post">
            <div className="post-img">
              <a href="#">
                <img src="assets/img/blog/3.jpg" alt="" />
              </a>
            </div>
            <div className="pst-content">
              <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
            </div>
          </div>

          <div className="recent-single-post">
            <div className="post-img">
              <a href="#">
                <img src="assets/img/blog/4.jpg" alt="" />
              </a>
            </div>
            <div className="pst-content">
              <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
