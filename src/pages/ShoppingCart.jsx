import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', margin: '0 auto', marginTop: '8rem', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '550px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Shopping Cart is Empty</h2>
                <button
                    onClick={() => navigate('/products')}
                    style={{
                        marginTop: '1rem',
                        padding: '0.6rem 1.2rem',
                        backgroundColor: '#0e81fc',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', marginTop: '5rem', display: 'flex', gap: '2rem' }}>
            {/* Left column: Cart items in a single container */}
            <div style={{
                flex: 2,
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '2rem',
                backgroundColor: '#fefefe',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '550px',
                gap: '1rem'
            }}>
                <h2 style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1rem' }}>Shopping Cart</h2>

                <hr />

                {cartItems.map((item, index) => (
                    <React.Fragment key={item.id}>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {/* Image */}
                            <div style={{
                                width: '180px',
                                height: '180px',
                                overflow: 'hidden',
                                borderRadius: '10px',
                                flexShrink: 0
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Info */}
                            <div style={{ flex: 1 }}>
                                <p style={{ margin: '0 0 0.5rem', fontSize: '1.5rem' }}>{item.name}</p>
                                <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '0.5rem' }}>{item.description}</p>
                                <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#28a745', marginBottom: '1rem' }}>
                                    ₹{item.price}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    {item.quantity === 1 ? (
                                        <button
                                            onClick={() => dispatch(decrementQuantity(item.id))}
                                            style={{
                                                padding: '0.4rem 0.8rem',
                                                fontSize: '0.1rem',
                                                border: '1px solid #ccc',
                                                borderRadius: '5px',
                                                backgroundColor: '#f5f5f5',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => dispatch(decrementQuantity(item.id))}
                                            style={{
                                                padding: '0.4rem 0.8rem',
                                                fontSize: '1rem',
                                                border: '1px solid #ccc',
                                                borderRadius: '5px',
                                                backgroundColor: '#f5f5f5',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            −
                                        </button>
                                    )}
                                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(incrementQuantity(item.id))}
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
                            </div>
                        </div>

                        {/* Separator */}
                        {index !== cartItems.length - 1 && <hr style={{ margin: '1rem 0', border: '0.5px solid #ddd' }} />}

                    </React.Fragment>
                ))}
                <hr style={{ marginBottom: '1rem' }} />
                <button
                    onClick={() => dispatch(clearCart())}
                    style={{
                        padding: '0.6rem 1.2rem',
                        backgroundColor: '#dc2626',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '100px',
                        cursor: 'pointer',
                        margin: 'auto',
                        width: '40%'
                    }}
                >
                    Clear Cart
                </button>
            </div>

            {/* Right column: Totals and actions */}
            <div style={{
                flex: 1,
                position: 'sticky',
                top: '7rem',
                alignSelf: 'flex-start',
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: '700px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>

                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            Total ({totalItems} {totalItems === 1 ? 'item' : 'items'}) :
                        </span>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            ₹{total}
                        </span>
                    </div>
                    <button
                        onClick={() => alert('Checkout feature coming soon!')}
                        style={{
                            padding: '0.6rem 1.2rem',
                            backgroundColor: 'rgb(6, 159, 26)',
                            color: '#fff',
                            fontSize: '1rem',
                            border: 'none',
                            borderRadius: '100px',
                            cursor: 'pointer',
                            width: '100%',
                            marginBottom: '1rem'
                        }}
                    >
                        Checkout
                    </button>
                    <button
                        onClick={() => navigate('/products')}
                        style={{
                            marginTop: '2rem',
                            padding: '0.6rem 1.2rem',
                            backgroundColor: '#0e81fc',
                            color: '#fff',
                            fontSize: '1rem',
                            border: 'none',
                            borderRadius: '100px',
                            cursor: 'pointer',
                            width: '100%'
                        }}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
