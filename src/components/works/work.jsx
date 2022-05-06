import React from 'react'
import './work.css'
import amazon from '../../img/amazon.png';
import facebook from '../../img/Facebook.png';
import shopify from '../../img/Shopify.png';
import Upwork from '../../img/Upwork.png';


const work=()=>{
    return(
  <div className='works'>
<div className='s-left'>
        <span>Works for </span>
        <span>Brands & Clients</span>
        <span>We are poviding great servises of new commers</span>
        <button className='button s-button'>Hire me</button>
        <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>
        </div>
       {/*right side */}
<div className='w-right'>
    <div className='w-mainCircle'>
    <div className='w-secCircle'>
        <img src={amazon} alt=""/>
    </div>
    <div className='w-secCircle'>
        <img src={Upwork} alt=""/>
    </div>
    <div className='w-secCircle'>
        <img src={shopify} alt=""/>
    </div>
    <div className='w-secCircle'>

        <img src={facebook} alt=""/>
    </div>

    </div>
    {/* background circle */}
      <div className='w-backCircle blueCircle'></div>
      <div className='w-backCircle yellowCircle'></div>

</div>

  </div>
 
    )
}
export default work;