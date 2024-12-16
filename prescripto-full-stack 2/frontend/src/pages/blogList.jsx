import { Link } from 'react-router-dom';

const BlogList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Latest Blogs</h1>

      <div className="blog-preview">
        <h2 className="text-2xl font-semibold">Blog 1: Healthy Eating</h2>
        <p className="text-gray-700">Learn how a balanced diet can improve your health and well-being.</p>
        <Link to="/blog1" className="text-blue-500 hover:underline">Read More</Link>
      </div>

      <div className="blog-preview mt-6">
        <h2 className="text-2xl font-semibold">Blog 2: Effective Workouts</h2>
        <p className="text-gray-700">Discover workout routines that can help you stay fit and strong.</p>
        <Link to="/blog2" className="text-blue-500 hover:underline">Read More</Link>
      </div>

      <div className="blog-preview mt-6">
        <h2 className="text-2xl font-semibold">Blog 3: Mental Health Matters</h2>
        <p className="text-gray-700">Explore tips to maintain mental well-being alongside physical health.</p>
        <Link to="/blog3" className="text-blue-500 hover:underline">Read More</Link>
      </div>
    </div>
  );
};

export default BlogList;
