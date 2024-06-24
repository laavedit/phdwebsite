// Blog.jsx
import React, { useState } from 'react';
import './Blog.css';
import BlogDisplay from '../../components/BlogDisplay/BlogDisplay';

const Blog = ({ blogPosts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    // Function to handle pagination
    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total number of pages
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    return (
        <div className="blog-container">
            <h3 className="blog-title">Recent Posts</h3>
            {blogPosts.length > 0 ? (
                <>
                    <BlogDisplay blogPosts={blogPosts} currentPage={currentPage} postsPerPage={postsPerPage} />
                    {/* Pagination */}
                    <div className="pagination">
                        {[...Array(totalPages)].map((_, index) => (
                            <div
                                key={index}
                                className={`pagination-dot ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handlePagination(index + 1)}
                                role="button"
                                tabIndex={0}
                            ></div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
};

export default Blog;
