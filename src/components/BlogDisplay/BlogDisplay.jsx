import React, { useState } from 'react';
import './BlogDisplay.css';

const BlogDisplay = ({ blogPosts, currentPage, postsPerPage }) => {
    const [expandedPosts, setExpandedPosts] = useState({});

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = blogPosts.slice(startIndex, endIndex);

    const toggleReadMore = (postId) => {
        setExpandedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    return (
        <div className="blog-posts">
            {currentPosts.map((post) => (
                <div key={post.id} className="blog-post">
                    <div className="blog-post-image-container">
                        <img src={post.image} alt={post.title} className="blog-post-image" />
                        <h3 className="blog-post-title">{post.title}</h3>
                    </div>
                    <div className="blog-post-details">
                        <p className={`blog-post-content ${expandedPosts[post.id] ? 'expanded' : ''}`}>
                            {post.content}
                        </p>
                        <button className="read-more" onClick={() => toggleReadMore(post.id)}>
                            {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogDisplay;
