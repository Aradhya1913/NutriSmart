import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/blog3.jpg'; // Make sure to link to the correct image
import './Blog3.css'; // Link to a new CSS file for this page

const Blog3 = () => {
    return (
        <div className="blog-page-container">
            <div className="blog-content">
                <img src={blogImage} alt="Mindfulness" className="blog-image" />
                <h1 className="blog-title">Mindfulness: A Path to Better Mental Health</h1>
                <p className="blog-subheading">Practicing mindfulness can help you find balance, reduce stress, and improve your overall well-being.</p>
                
                <h2 className="section-title">1. What is Mindfulness?</h2>
                <p className="blog-text">
                    Mindfulness is the practice of being present and fully engaged in the moment, without judgment. It encourages awareness of your thoughts, feelings, and surroundings, helping you stay grounded and reduce anxiety.
                </p>

                <h2 className="section-title">2. Benefits of Mindfulness for Mental Health</h2>
                <p className="blog-text">
                    Mindfulness has been shown to improve mental health by reducing symptoms of depression and anxiety, enhancing emotional regulation, and increasing self-awareness. Practicing mindfulness regularly can lead to long-term improvements in mood and stress levels.
                </p>

                <h2 className="section-title">3. How to Practice Mindfulness</h2>
                <p className="blog-text">
                    Mindfulness can be practiced through meditation, mindful breathing, or simply focusing on the present moment during daily activities. Start by taking a few deep breaths and paying attention to your sensations, thoughts, and surroundings.
                </p>

                <h2 className="section-title">4. Mindfulness in Daily Life</h2>
                <p className="blog-text">
                    Incorporating mindfulness into your daily life can be as simple as paying attention to your senses while eating, walking, or even doing chores. Practicing mindfulness helps you appreciate small moments and find calm in a busy world.
                </p>

                <h2 className="section-title">5. Mindfulness for Stress Reduction</h2>
                <p className="blog-text">
                    Mindfulness practices have been proven to lower cortisol levels, the hormone responsible for stress. By focusing on the present and letting go of future anxieties or past regrets, mindfulness helps reduce overall stress and promotes a sense of peace.
                </p>

                <p className="mt-1 text-gray-500 italic">Tip: Even setting aside just 5 minutes a day to practice mindfulness can have a positive impact on your mental health.</p>

                <Link to="/Blogs" className="back-to-blog">← Back to Blog</Link>
            </div>
        </div>
    );
};

export default Blog3;
