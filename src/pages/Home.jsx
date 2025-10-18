import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Home.css';

/**
 * Home page component
 * Demonstrates useState hook and component composition
 */
const Home = () => {
  const [message, setMessage] = useState('Welcome to React Practice Projects!');

  const changeMessage = () => {
    const messages = [
      'Welcome to React Practice Projects!',
      'Learn React hooks, props, and state!',
      'Build amazing UIs with React!',
      'Practice makes perfect!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  };

  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">React Practice Projects</h1>
        <p className="hero-subtitle">
          A collection of projects to learn and master React fundamentals
        </p>
      </div>

      <div className="cards-grid">
        <Card title="Welcome">
          <p>{message}</p>
          <Button onClick={changeMessage} variant="primary">
            Change Message
          </Button>
        </Card>

        <Card title="What You'll Learn">
          <ul className="feature-list">
            <li>React Hooks (useState, useEffect, custom hooks)</li>
            <li>Component Props and State Management</li>
            <li>React Router for Navigation</li>
            <li>Reusable Component Patterns</li>
            <li>Modern ES6+ JavaScript</li>
          </ul>
        </Card>

        <Card title="Getting Started">
          <p>
            Explore the different pages to see various React concepts in action.
            Each page demonstrates different features and patterns.
          </p>
          <p>
            Check out the components, hooks, and utilities in the source code
            to understand how everything works together.
          </p>
        </Card>
      </div>

      <div className="quick-stats">
        <div className="stat-card">
          <h3>4</h3>
          <p>Sample Pages</p>
        </div>
        <div className="stat-card">
          <h3>5+</h3>
          <p>Reusable Components</p>
        </div>
        <div className="stat-card">
          <h3>2+</h3>
          <p>Custom Hooks</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
