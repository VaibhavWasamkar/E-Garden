import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/landing-bg.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleGetStarted = () => {
    navigate('/products');
  };  

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        color: '#222',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Top-Right Button */}
      <div
        style={{
          position: 'absolute',
          top: '5rem',
          right: '40px',
          fontSize: '5rem',
          color: '#fff',
        }}
      >
        
      </div>

      {/* Centered Project Name */}
      <div
        style={{
          position: 'absolute',
          maxWidth: '600px',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'Center',
          fontSize: '4rem',
          color: '#fff',
        }}
      >
        <h1
          style={{
            background: 'linear-gradient(to right, #22c55e, #65a30d, #065f46)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
        }}
        >
        E-Garden
        </h1>
        <p style={{ color: '#222', fontSize: '1.8rem', marginBottom: '1rem' }}
        >
          Discover nature's beauty at your doorstep.
        </p>
        <button
          onClick={handleGetStarted}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: isHovered ? '#065f46' : 'rgb(6, 159, 26)', // Lighter green on hover
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
            transition: 'background-color 0.3s ease',
          }}
        >
          Get Started
        </button>
      </div>

      {/* Bottom-Left Description */}
      <p
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          maxWidth: '640px',
          fontSize: '2rem',
          color: '#333',
          padding: '10px 15px',
          borderRadius: '8px',
        }}
      >
        <hr style={{ marginBottom: '1rem' }} />
        Explore our hand-picked collection of
        houseplants for a greener lifestyle.
      </p>
    </div>
  );
};

export default LandingPage;
