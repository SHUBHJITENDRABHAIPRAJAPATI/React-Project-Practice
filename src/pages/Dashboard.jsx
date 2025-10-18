import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import useCounter from '../hooks/useCounter';
import useLocalStorage from '../hooks/useLocalStorage';
import './Dashboard.css';

/**
 * Dashboard page component
 * Demonstrates custom hooks and state management
 */
const Dashboard = () => {
  const [name, setName] = useLocalStorage('userName', '');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { count, increment, decrement, reset } = useCounter(0, 1);
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Hooks', completed: true },
    { id: 2, text: 'Build Reusable Components', completed: true },
    { id: 3, text: 'Master State Management', completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addTodo = () => {
    const newTodo = prompt('Enter a new todo:');
    if (newTodo) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }]);
    }
  };

  return (
    <div className={`dashboard theme-${theme}`}>
      <h1>Interactive Dashboard</h1>
      <p className="dashboard-subtitle">
        Explore various React concepts with interactive examples
      </p>

      <div className="dashboard-grid">
        <Card title="Custom Hook: useLocalStorage">
          <div className="input-group">
            <label htmlFor="name">Your Name (saved to localStorage):</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input-field"
            />
            {name && <p className="greeting">Hello, {name}! 👋</p>}
          </div>

          <div className="theme-toggle">
            <label>Theme:</label>
            <div className="button-group">
              <Button
                onClick={() => setTheme('light')}
                variant={theme === 'light' ? 'primary' : 'secondary'}
                size="small"
              >
                Light
              </Button>
              <Button
                onClick={() => setTheme('dark')}
                variant={theme === 'dark' ? 'primary' : 'secondary'}
                size="small"
              >
                Dark
              </Button>
            </div>
          </div>
        </Card>

        <Card title="Custom Hook: useCounter">
          <div className="counter-display">
            <h2>{count}</h2>
          </div>
          <div className="button-group">
            <Button onClick={decrement} variant="danger" size="small">
              - Decrease
            </Button>
            <Button onClick={reset} variant="secondary" size="small">
              Reset
            </Button>
            <Button onClick={increment} variant="success" size="small">
              + Increase
            </Button>
          </div>
          <p className="hint">
            This counter uses a custom hook for reusable logic
          </p>
        </Card>

        <Card 
          title="Todo List (State Management)"
          footer={
            <Button onClick={addTodo} variant="primary" size="small">
              + Add Todo
            </Button>
          }
        >
          <ul className="todo-list">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                <span className="todo-checkbox">
                  {todo.completed ? '✓' : '○'}
                </span>
                <span className="todo-text">{todo.text}</span>
              </li>
            ))}
          </ul>
          <p className="hint">Click on items to toggle completion</p>
        </Card>

        <Card title="Component Showcase">
          <p>Different button variants and sizes:</p>
          <div className="showcase-section">
            <h4>Variants:</h4>
            <div className="button-group">
              <Button variant="primary" size="small">Primary</Button>
              <Button variant="secondary" size="small">Secondary</Button>
              <Button variant="success" size="small">Success</Button>
              <Button variant="danger" size="small">Danger</Button>
            </div>
          </div>
          <div className="showcase-section">
            <h4>Sizes:</h4>
            <div className="button-group">
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="medium">Medium</Button>
              <Button variant="primary" size="large">Large</Button>
            </div>
          </div>
          <div className="showcase-section">
            <h4>States:</h4>
            <div className="button-group">
              <Button variant="primary">Enabled</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
