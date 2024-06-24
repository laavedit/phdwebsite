import React from 'react';
import './IndividualBlogPost.css';

const IndividualBlogPost = ({ post }) => (
    <div className="individual-blog-post">
        <h1>{post.title}</h1>
        <p>By {post.author} on {post.date}</p>
        <div className="post-content">{post.content}</div>
        <div className="related-posts">
            {/* Render related posts here */}
        </div>
        <div className="comments-section">
            {/* Render comments section here */}
        </div>
    </div>
);

export default IndividualBlogPost;
