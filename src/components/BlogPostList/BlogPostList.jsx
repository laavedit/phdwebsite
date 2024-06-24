import React from 'react';
import './BlogPostList.css';

const BlogPostList = ({ posts }) => (
    <div className="blog-post-list">
        {posts.map(post => (
            <div key={post.id} className="blog-post-excerpt">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <p>{post.date}</p>
                <p>By {post.author}</p>
                <a href={`/post/${post.id}`}>Read More</a>
            </div>
        ))}
    </div>
);

export default BlogPostList;
