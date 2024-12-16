import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/blog2.jpg'; // Make sure to link to the correct image
import './Blog2.css'; // Link to a new CSS file for this page

const Blog2 = () => {
    return (
        <div className="blog-page-container">
            <div className="blog-content">
                <img src={blogImage} alt="Regular Exercise" className="blog-image" />
                <h1 className="blog-title">The Benefits of Regular Exercise</h1>
                <p className="blog-subheading">Regular physical activity can have an immense positive impact on your health and well-being!</p>
                
                <h2 className="section-title">1. Improves Cardiovascular Health</h2>
                <p className="blog-text">
                    Engaging in regular exercise strengthens your heart and improves your blood circulation, helping reduce the risk of heart disease and lowering blood pressure.
                </p>

                <h2 className="section-title">2. Helps Control Weight</h2>
                <p className="blog-text">
                    Exercise helps burn calories and build muscle, aiding in weight management. Regular physical activity is essential for maintaining a healthy weight.
                </p>

                <h2 className="section-title">3. Boosts Mental Health</h2>
                <p className="blog-text">
                    Physical activity stimulates chemicals in the brain that improve mood and reduce feelings of anxiety and depression. It's a natural way to boost your mental well-being.
                </p>

                <h2 className="section-title">4. Strengthens Bones and Muscles</h2>
                <p className="blog-text">
                    Weight-bearing exercises like running, walking, and strength training help improve bone density and muscle strength, reducing the risk of osteoporosis as you age.
                </p>

                <h2 className="section-title">5. Increases Longevity</h2>
                <p className="blog-text">
                    Studies have shown that people who engage in regular physical activity live longer, healthier lives. Exercise reduces the risk of many chronic diseases, including diabetes and certain cancers.
                </p>

                <p className="mt-1 text-gray-500 italic">Tip: Incorporating just 30 minutes of exercise into your daily routine can bring about significant health benefits.</p>

                <Link to="/Blogs" className="back-to-blog">← Back to Blog</Link>
            </div>
        </div>
    );
};

export default Blog2;
