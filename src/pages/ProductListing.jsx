import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';

const plantsData = [
  // Indoor
  { id: 1, name: 'Snake Plant', price: 299, description: 'Air purifying and low-maintenance.', image: '/images/snake.jpg', category: 'Indoor' },
  { id: 2, name: 'Peace Lily', price: 349, description: 'Elegant plant with white blooms.', image: '/images/lily.jpg', category: 'Indoor' },
  // Outdoor
  { id: 3, name: 'Areca Palm', price: 499, description: 'Tropical vibes for your garden.', image: '/images/areca.jpg', category: 'Outdoor' },
  { id: 4, name: 'Jade Plant', price: 199, description: 'Symbol of good luck and prosperity.', image: '/images/jade.jpg', category: 'Outdoor' },
  // Succulents
  { id: 5, name: 'Zebra Haworthia', price: 249, description: 'Striking zebra-striped leaves.', image: '/images/zebra.jpg', category: 'Succulents' },
  { id: 6, name: 'Echeveria', price: 229, description: 'Rosette-shaped beauty for any spot.', image: '/images/echeveria.jpg', category: 'Succulents' },
];

function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const groupedPlants = plantsData.reduce((groups, plant) => {
    if (!groups[plant.category]) {
      groups[plant.category] = [];
    }
    groups[plant.category].push(plant);
    return groups;
  }, {});

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', marginTop: '5rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Explore Our Plants</h2>

      {Object.entries(groupedPlants).map(([category, plants]) => (
        <div key={category} style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{category} Plants</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {plants.map((plant) => {
              const quantity = getQuantity(plant.id);

              return (
                <div key={plant.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '12px',
                  backgroundColor: '#f9f9f9',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  width: '100%',
                  maxWidth: '650px',
                  margin: '1rem auto'
                }}>
                  {/* Left - Plant Image */}
                  <div style={{
                    width: '300px',
                    height: '300px',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    flexShrink: 0
                  }}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  {/* Right - Plant Info */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 0.5rem', fontSize: '2rem' }}>{plant.name}</h3>
                    <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '1rem' }}>{plant.description}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '2rem', color: '#28a745', marginBottom: '1rem' }}>
                      ₹{plant.price}
                    </p>

                    {quantity === 0 ? (
                      <button
                        onClick={() => dispatch(addToCart({ ...plant, quantity: 1 }))}
                        style={{
                          padding: '0.5rem 1rem',
                          border: 'none',
                          borderRadius: '5px',
                          backgroundColor: '#28a745',
                          color: '#fff',
                          cursor: 'pointer'
                        }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                          onClick={() => dispatch(decrementQuantity(plant.id))}
                          style={{
                            padding: '0.4rem 0.8rem',
                            fontSize: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            backgroundColor: '#f5f5f5',
                            cursor: 'pointer'
                          }}
                        >−</button>
                        <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(plant.id))}
                          style={{
                            padding: '0.4rem 0.8rem',
                            fontSize: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            backgroundColor: '#f5f5f5',
                            cursor: 'pointer'
                          }}
                        >+</button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
