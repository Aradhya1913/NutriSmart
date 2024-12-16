import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Adjust the import path as per your project structure
import './Blogs.css'; // Make sure to import your CSS file
import background from '../assets/back1.jpg';

const Blog = () => {
    const blogPosts = [
        {
            title: 'Top 10 Foods for a Healthy Heart',
            description: 'Your heart health can be greatly improved by consuming heart-friendly foods. Learn about the top 10 foods that help maintain a healthy heart and reduce cardiovascular risks.',
            image: assets.blog1,
            link: '/Blog1', // Adjust this to the correct route
            category: 'Health'
        },
        {
            title: 'The Benefits of Regular Exercise',
            description: 'Regular physical activity can improve your overall health and fitness. Discover the myriad benefits of staying active.',
            image: assets.blog2,
            link: '/Blog2', // Adjust this to the correct route
            category: 'Fitness'
        },
        {
            title: 'Mindfulness: A Path to Better Mental Health',
            description: 'Practicing mindfulness can help reduce stress and improve mental well-being. Learn techniques to incorporate mindfulness into your daily routine.',
            image: assets.blog3,
            link: '/Blog3', // Adjust this to the correct route
            category: 'Mental Health'
        }
    ];

    return (
        <div className="page-container" style={{ backgroundImage: `url(${background})` }}>
            {/* Heading at the very top */}
            <div className="header">
                <h1 className="blog-heading">Our Insightful Blogs</h1>
            </div>

            {/* Blog Posts */}
            <div className="blog-container">
                {blogPosts.map((post, index) => (
                    <div key={index} className="blog-post">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <Link to={post.link} className="read-more">Read more</Link>
                        <p className="category">Category: {post.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
