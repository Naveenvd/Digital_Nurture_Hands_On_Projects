import React from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <CourseDetails />
        <div className="divider"></div>
        <BookDetails />
        <div className="divider"></div>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
