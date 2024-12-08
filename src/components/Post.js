// src/components/Post.js
const Post = ({ post }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {/* Image */}
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg"
        />
  
        {/* Title */}
        <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
  
        {/* Paragraph (Main Content) */}
        <p className="text-gray-700 mt-2">{post.paragraph}</p>
  
        {/* Excerpt */}
        <p className="text-gray-600 mt-4">{post.excerpt}</p>
  
        {/* "Read More" Link */}
        <a href={`#`} className="text-blue-500 mt-4 inline-block">
          Read More
        </a>
      </div>
    );
  };
  
  export default Post;
  