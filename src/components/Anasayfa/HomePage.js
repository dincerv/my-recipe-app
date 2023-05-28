// HomePage.js

import React from 'react';
import './HomePage.css';
import recipeImage1 from '../images/recipe1.png';
import recipeImage2 from '../images/recipe2.png';
import categories1 from '../images/categories1.png';
import categories2 from '../images/categories2.png';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
      <Navbar />
        <h1>Welcome to My Recipe App</h1>
        <p>Discover delicious recipes for every occasion</p>
      </header>
      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipe-card">
          <img src={recipeImage1} alt="Recipe1" style={{ width: '50%', height: 'auto' }} />
          <h3>Recipe 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="/recipe/1">View Recipe</a>
        </div>
        <div className="recipe-card">
          <img src={recipeImage2} alt="Recipe2" style={{ width: '50%', height: 'auto' }} />
          <h3>Recipe 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="/recipe/2">View Recipe</a>
        </div>
      </section>
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-card">
          <img src={categories1} alt="Category1" style={{ width: '50%', height: 'auto' }} />
          <h3>Category 1</h3>
        </div>
        <div className="category-card">
          <img src={categories2} alt="Category2" style={{ width: '50%', height: 'auto' }} />
          <h3>Category 2</h3>
        </div>
      </section>
      <section className="banner">
        
      </section>
      <footer className="footer">
        <p>&copy; 2023 My Recipe App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

