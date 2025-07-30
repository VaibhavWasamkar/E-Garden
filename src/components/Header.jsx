import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: 'linear-gradient(to right, #065f46, #65a30d, #22c55e)',
  color: 'white',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

const navLinkStyle = {
  marginLeft: '1.5rem',
  textDecoration: 'none',
  color: 'white',
  fontWeight: '500',
  fontSize: '1.1rem',
  transition: 'color 0.3s ease',
};

const cartWrapperStyle = {
  position: 'relative',
  display: 'inline-block',
};

const cartBubbleStyle = {
  position: 'absolute',
  top: '-2px',
  right: '60px',
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '999px',
  padding: '2px 6px',
  fontSize: '0.5rem',
  fontWeight: 'bold',
  minWidth: '10px',
  textAlign: 'center',
};

const cartButtonStyle = {
  marginLeft: '1.5rem',
  backgroundColor: 'white',
  color: '#047857',
  padding: '0.5rem 1rem',
  borderRadius: '999px',
  fontWeight: '600',
  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  textDecoration: 'none',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  color: 'white',
};

const Header = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isLandingPage = location.pathname === "/";

  return (
    <header style={headerStyle}>
      <Link to="/" style={titleStyle}>
        <span role="img" aria-label="leaf">🌱</span>
        E-Garden
      </Link>

      <nav>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/products" style={navLinkStyle}>Plants</Link>

        {!isLandingPage && (
          <span style={cartWrapperStyle}>
            <Link to="/cart" style={cartButtonStyle}>🛒 Cart</Link>
            {totalQuantity > 0 && (
              <span style={cartBubbleStyle}>{totalQuantity}</span>
            )}
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;
