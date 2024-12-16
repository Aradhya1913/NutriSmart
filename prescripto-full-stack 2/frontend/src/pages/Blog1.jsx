import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/blog1.jpg'; // Ensure the path to your image is correct
import './Blog1.css'; // Link to your CSS file

const Blog1 = () => {
    return (
        <div className="blog-page-container">
            <div className="blog-content">
                <img src={blogImage} alt="Healthy Eating" className="blog-image" />
                <h1 className="blog-title">Top 10 Foods for a Healthy Heart</h1>
                <p className="blog-subheading">Maintaining a healthy heart is all about choosing the right foods!</p>
                
                <h2 className="section-title">1. Leafy Green Vegetables</h2>
                <p className="blog-text">
                    Leafy greens like spinach, kale, and collard greens are rich in vitamins, minerals, and antioxidants. They're particularly high in vitamin K, which helps protect your arteries and promotes proper blood clotting. 
                </p>

                <h2 className="section-title">2. Whole Grains</h2>
                <p className="blog-text">
                    Whole grains such as oats, quinoa, barley, and whole wheat are packed with fiber, which can help reduce LDL cholesterol and decrease the risk of heart disease.
                </p>

                {/* Add more content sections as needed */}
                

                <h2 className="section-title">3. Avocados</h2>
                <p className="blog-text">
                    Avocados are a great source of monounsaturated fats, which have been linked to reduced levels of cholesterol and a lower risk of heart disease.
                </p>

                <h2 className="section-title">4. Berries</h2>
                <p className="blog-text">
                Berries like blueberries, strawberries, and raspberries are packed with antioxidants, fiber, and nutrients like vitamin C. These fruits help reduce inflammation, a major contributor to heart disease, and improve overall cardiovascular function.
                </p>
                <p className="mt-1 text-gray-500 italic">How to enjoyy: Add berries to your breakfast cereal, yogurt, or snack on them throughout the day..</p>

                <h2 className="section-title">5. Nuts and Seeds</h2>
                <p className="blog-text">
                Almonds, walnuts, chia seeds, and flaxseeds are excellent sources of omega-3 fatty acids, fiber, and protein. They also contain antioxidants, which help fight inflammation and improve cholesterol levels.                </p>
                <p className="mt-1 text-gray-500 italic">How to enjoyy: A handful of nuts or seeds makes for a perfect snack, or sprinkle them over salads and oatmeal.</p>

                
                
                <Link to="/Blogs" className="back-to-blog">← Back to Blog</Link>
            </div>
        </div>
    );
};

export default Blog1;
