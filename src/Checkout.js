import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";


function Checkout() {
  const [{basket}, dispatch]=useStateValue();
  return (
    <div className="checkout">
    <div className="checkout_left">
        <img className="checkout_ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Watches2021/Winterflipwatches/topbannerupdated/pc/L1-pc-2.jpg" alt=" "/>
        <div>
            <h2 className="checkout_title"> Your Shopping Basket</h2>
            {basket.map(item=>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}

              
              />
            ))}
            {/*CheckoutProduct*/}
            {/*CheckoutProduct*/}
            {/*CheckoutProduct*/}
            {/*CheckoutProduct*/}
            
        </div>
    </div>
    <div className="checkout_right">
      <Subtotal/>
     

    </div>
    </div>
  )
}

export default Checkout