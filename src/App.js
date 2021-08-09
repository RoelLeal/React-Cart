import React, { Fragment } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <Fragment>
      <CartProvider>
      <Home />
      <Cart />
      </CartProvider>
    </Fragment>
  );
}
export default App;