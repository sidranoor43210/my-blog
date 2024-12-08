// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/Post-list";

const App = () => {
  const posts = [
    {
      title: "First Blog Post",
      imageUrl: "https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg",
      paragraph: "This is the main content of the first blog post. It talks about the experience of starting a new project and the challenges encountered.",
      excerpt: "This is the excerpt of the first blog post. It's a short summary of the full post, giving readers a preview of what's inside.",
    },
    {
      title: "Learning Hmtl",
      imageUrl: "https://images.unsplash.com/photo-1607706189992-eae578626c86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D",
      paragraph: "In this post, we delve into the world of coding. How learning React changed the way I think about web development.",
      excerpt: "This blog post is all about the learning journey with React. I share some tips and resources to get started with React.",
    },
    {
      title: "Learning Css",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpAlZPP2Ongj2u_ITu8EICAK3CcshnaFfbg&s",
      paragraph: "In this post, we delve into the world of coding. How learning React changed the way I think about web development.",
      excerpt: "This blog post is all about the learning journey with React. I share some tips and resources to get started with React.",
    },
    {
      title: "Learning Java",
      imageUrl: "https://d3m1rm8xuevz4q.cloudfront.net/wp-content/uploads/2014/10/what-is-java.png.webp",
      paragraph: "In this post, we delve into the world of coding. How learning React changed the way I think about web development.",
      excerpt: "This blog post is all about the learning journey with React. I share some tips and resources to get started with React.",
    },
    {
      title: "Learning React",
      imageUrl: "https://media.licdn.com/dms/image/D5612AQHsRHaK3w7uDQ/article-cover_image-shrink_720_1280/0/1683864374899?e=2147483647&v=beta&t=4SH89eQCHE0arSIdW2tHVo_zuBBTtWTi7XnbXHTZWkE",
      paragraph: "React is an incredible library for building user interfaces. In this post, I share my thoughts on why React is so powerful.",
      excerpt: "This post highlights some key features of React and how it simplifies frontend development, making it one of the most popular libraries today.",
    },
  ];

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-2">
        <h1 className="text-4xl font-bold text-center">Welcome to My Blog</h1>
        <PostList posts={posts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
