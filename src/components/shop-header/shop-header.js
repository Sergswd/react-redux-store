import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ cartItems, total }) => {
  const count = cartItems.reduce((acc, cur) => {
    return acc += cur.count
  }, 0);
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark" href="#">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {count} items (${total})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    cartItems,
    total: orderTotal
  }
}

export default connect(mapStateToProps)(ShopHeader);