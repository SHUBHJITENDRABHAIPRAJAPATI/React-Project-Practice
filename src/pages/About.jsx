import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './About.css';

/**
 * About page component
 * Demonstrates useState and useEffect hooks
 */
const About = () => {
  const [showTech, setShowTech] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect example: updating time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  const technologies = [
    { name: 'React', description: 'A JavaScript library for building user interfaces' },
    { name: 'React Router', description: 'Declarative routing for React applications' },
    { name: 'Vite', description: 'Next generation frontend tooling' },
    { name: 'CSS3', description: 'Modern styling with animations and layouts' }
  ];

  return (
    <div className="about">
      <h1>About This Project</h1>
      
      <Card title="Project Overview">
        <p>
          This is a React practice project designed to help developers learn
          and understand fundamental React concepts through hands-on examples.
        </p>
        <p>
          The project structure is organized with best practices in mind,
          featuring reusable components, custom hooks, and clean separation
          of concerns.
        </p>
      </Card>

      <Card title="Live Example: useEffect Hook" className="time-card">
        <p>Current Time (updates every second):</p>
        <div className="time-display">{time}</div>
        <p className="time-note">
          This demonstrates the useEffect hook with cleanup functionality
        </p>
      </Card>

      <Card 
        title="Technologies Used"
        footer={
          <Button 
            onClick={() => setShowTech(!showTech)} 
            variant="primary"
          >
            {showTech ? 'Hide' : 'Show'} Details
          </Button>
        }
      >
        <p>This project is built with modern web technologies:</p>
        {showTech && (
          <div className="tech-list">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <h4>{tech.name}</h4>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title="Learning Goals">
        <div className="goals-grid">
          <div className="goal-item">
            <span className="goal-icon">🎯</span>
            <h3>Component Architecture</h3>
            <p>Learn to build modular, reusable components</p>
          </div>
          <div className="goal-item">
            <span className="goal-icon">🔄</span>
            <h3>State Management</h3>
            <p>Master useState and complex state patterns</p>
          </div>
          <div className="goal-item">
            <span className="goal-icon">🪝</span>
            <h3>React Hooks</h3>
            <p>Understand and create custom hooks</p>
          </div>
          <div className="goal-item">
            <span className="goal-icon">🛣️</span>
            <h3>Routing</h3>
            <p>Navigate between pages with React Router</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
