import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Contact.css';

/**
 * Contact page component
 * Demonstrates form handling and state management
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        This is a demo contact form showing form handling in React
      </p>

      <div className="contact-container">
        <Card title="Send us a Message" className="contact-card">
          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✓</span>
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  rows="5"
                  placeholder="Your message here..."
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <Button type="submit" variant="primary" size="large">
                Send Message
              </Button>
            </form>
          )}
        </Card>

        <div className="contact-info">
          <Card title="Project Info">
            <div className="info-item">
              <h4>📚 Repository</h4>
              <p>React-Project-Practice</p>
            </div>
            <div className="info-item">
              <h4>🎯 Purpose</h4>
              <p>Learning React fundamentals through practice</p>
            </div>
            <div className="info-item">
              <h4>💡 Topics Covered</h4>
              <ul>
                <li>Component Architecture</li>
                <li>Hooks & State</li>
                <li>Routing</li>
                <li>Form Handling</li>
              </ul>
            </div>
          </Card>

          <Card title="Form Features">
            <ul className="features">
              <li>✓ Controlled components</li>
              <li>✓ Form validation</li>
              <li>✓ Error handling</li>
              <li>✓ State management</li>
              <li>✓ Event handling</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
