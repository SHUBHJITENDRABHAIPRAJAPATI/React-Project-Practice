import PropTypes from 'prop-types';
import './Card.css';

/**
 * Reusable Card component
 * Demonstrates component composition and children props
 */
const Card = ({ 
  title, 
  children, 
  footer,
  className = '' 
}) => {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="card-header">
          <h3>{title}</h3>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  className: PropTypes.string
};

export default Card;
