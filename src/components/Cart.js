
import React, { useState } from 'react';

const Cart = () => {
 
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
    { id: 4, name: 'Item 4', price: 40 },
    { id: 5, name: 'Item 5', price: 50 },
    { id: 6, name: 'Item 6', price: 60 },
    { id: 7, name: 'Item 7', price: 70 },
    { id: 8, name: 'Item 8', price: 80 },
    { id: 9, name: 'Item 9', price: 90 },
    { id: 10, name: 'Item 10', price: 100 },
    { id: 11, name: 'Item 11', price: 110 },
    { id: 12, name: 'Item 12', price: 120 },
    { id: 13, name: 'Item 13', price: 130 },
    { id: 14, name: 'Item 14', price: 140 },
    { id: 15, name: 'Item 15', price: 150 },
  ];

  const handleAddToCart = (item, quantity) => {
    // Find the index of the item in the cart
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);

    // If the item is already in the cart, update its quantity
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity += quantity;
      setCart(updatedCart);
    }
    // Otherwise, add the item to the cart
    else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div className="add-to-cart-page flex flex-grow py-4 justify-between items-start p-5 gap-5">
      <h2 className='font-bold text-center text-xl'>Menu</h2>
      <div className="menu-items grid grid-cols-2 gap-2 mt-2 p-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xs:grid-cols-1">
        {menuItems.map((item) => (
          <div className="menu-item flex flex-col bg-slate-100 p-5 rounded-md shadow-lg gap-6 w-[400px] sm:w-60 md:w-96" key={item.id}>
            <h3 className='text-lg font-semibold'>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleAddToCart(item, 1)} className='p-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600'>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart w-4/12 flex  flex-col  justify-start sm:flex-1 ">
        <h2 className='font-bold text-xl'>Cart</h2>
        {cart.length === 0 ? (
          <p className='m-0 text-lg font-semibold'>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div className="cart-item flex justify-between items-center p-3 border-b-2 sm:flex-1 " key={item.id}>
                <p className='m-0 text-lg'>{item.name} x {item.quantity}</p>
                <button onClick={() => handleRemoveFromCart(item)} className='p-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600'>Remove</button>
              </div>
            ))}
            <p className='m-0 text-lg'>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          </div>
        )}
      </div>
    </div>
  );
};
  
export default Cart;