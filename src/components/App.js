import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header name={blogData.name} />

      {/* About Component */}
      <About about={blogData.about} image={blogData.image} />

      {/* ArticleList Component */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
