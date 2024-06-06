import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);

  let itemCount = 0;
  let subtotal = 0;

  food_list.forEach((item) => {
    if (cartItems[item._id] > 0) {
      itemCount += cartItems[item._id];
      subtotal += item.price * cartItems[item._id];
    }
  });

  const deliveryFee = 2;
  const totalAmount = subtotal + deliveryFee;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />

        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{itemCount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalAmount.toFixed(2)}</b>
            </div>
          </div>
          <button type="submit">Proceed To Checkout</button>
        </div>
      </div>

      <div className="place-order-right">
        {/* Additional content can be added here */}
      </div>
    </form>
  );
};

export default PlaceOrder;
