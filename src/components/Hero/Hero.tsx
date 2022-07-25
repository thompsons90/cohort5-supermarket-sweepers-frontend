import React from 'react'
import './Hero.css';
import Cart from '../../assets/shop-cart.png';
import Produce from '../../assets/produce-bag.png';
import Shopper from '../../assets/shopper.png';
import Bag from '../../assets/bag.png';
import Market from '../../assets/market.png';
import Lady from '../../assets/ms-shopper.png';

interface Props {

}

const Hero = () => {
  return (
    <div className='Container'>
        <div className="bg-pics">
            <img className="hero-img" src={Cart} id="img-one" alt="" />
            <img className="hero-img" src={Produce} id="img-two" alt="" />
            <img className="hero-img" src={Shopper} id="img-three" alt="" />
            <img className="hero-img" src={Bag} id="img-four" alt="" />
            <img className="hero-img" src={Market} id="img-five" alt="" />
            <img className="hero-img" src={Lady} id="img-five" alt="" />
        </div>
        

    </div>
  )
}

export default Hero