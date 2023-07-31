import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
    <div className="home_container">
        <img className="home_image"
        src="https://m.media-amazon.com/images/I/71q4zK0bGIL._SX3000_.png" 
        alt=""></img>
       <div className="home_row">
        <Product
         id="345627"
         title="Fastrack Casual Analog Navy Blue Dial Men's Watch-NL3120SM02/NP3120SM02"
         price={1800}
         image="https://m.media-amazon.com/images/I/713bDOIqS5L._UY679_.jpg"
         rating={4}/>
        <Product
         id="6578992"
         title="Skechers Womens Flex Appeal 4.0-Walk Wonderfu Sneaker"
         price={3372}
         image="https://m.media-amazon.com/images/I/81tI-oDOwuL._UX695_.jpg"
         rating={3}/>
       </div>
       <div className="home_row">
       <Product
       id="672434"
       title="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
       price={18999}
       image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg"
       rating={4}/>
       <Product
       id="321456"
       title="AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED
        Fire TV with Dolby Atmos and Dolby Vision (Black)"
       price={32999}
       image="https://m.media-amazon.com/images/I/71GWurOTPpL._SX679_.jpg"
       rating={4}/>
       <Product 
        id="765432"
        title="INOVERA Faux Leather Women Handbags Shoulder Hobo Bag Purse
         With Long Strap, 32L x 13B x 30H cm"
        price={1324}
        image="https://m.media-amazon.com/images/I/71Raw8VUk5L._UY695_.jpg"
        rating={3}/>
        {/*product*/}
        {/*product*/}
        {/*product*/}
       </div>
       <div className="home_row">
       <Product
       id="543276"
       title="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, 
       Beast™ Mode(Low Latency Upto 80ms) for Gaming,ENx™ Tech, ASAP™ Charge,
       IWP™, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
      price={1412}
      image="https://m.media-amazon.com/images/I/51HBom8xz7L._SX679_.jpg"
      rating={2}/>
        {/*product*/}
       </div>
    </div>
    </div>
  );
}

export default Home