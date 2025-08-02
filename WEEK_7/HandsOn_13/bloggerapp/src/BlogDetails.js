import React from 'react';

const BlogDetails = () => {
  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      title: "Installation",
      author: "Schwezdenier",
      content: "You can install React from npm."
    }
  ];

  return (
    <div className="column">
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <strong>{blog.title}</strong><br />
          <em>{blog.author}</em><br />
          {blog.content}<br /><br />
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
