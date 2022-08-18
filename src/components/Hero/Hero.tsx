import React from 'react'
import './Hero.css';
import Cart from '../../assets/shop-cart.png';
import Produce from '../../assets/produce-bag.png';
import Shopper from '../../assets/shopper.png';
import Bag from '../../assets/bag.png';
import Market from '../../assets/market.png';
import Lady from '../../assets/ms-shopper.png';
import ShopBag from '../../assets/bag-two.jpg';
import CheckOut from '../../assets/checkOut.gif';
import Front from '../../assets/front.gif';
import HeroImg from '../../assets/logo.png';
interface Props {

}

const Hero = () => {


  return (
    <div className='con'>
        <img src={HeroImg} className="HeroImg" alt="" />
        <div className="bg-pics">
            <img className="hero-img" src={Cart} id="img-one" alt="" />
            <img className="hero-img" src={Produce} id="img-two" alt="" />
            <img className="hero-img" src={Shopper} id="img-three" alt="" />
            <img className="hero-img" src={Bag} id="img-four" alt="" />
            <img className="hero-img" src={Market} id="img-five" alt="" />
            <img className="hero-img" src={Lady} id="img-lady" alt="" />
            <img className="hero-img" src={ShopBag} id="img-six" alt="" />
            <img className="hero-img" src={CheckOut} id="img-seven" alt="" />
            <img className="hero-img" src={Front} id="img-eight" alt="" />
        </div>

        
        <a href='/search' className="bargain-btn">Search For Bargains</a>
        

    </div>
  )
}

export default Hero