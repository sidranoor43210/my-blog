// src/components/PostList.js
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="mt-8">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
