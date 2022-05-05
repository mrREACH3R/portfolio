import React from 'react'
// import crown from '../../img/crown.png'
import './floatingDiv.css'
const FloatingDiv=({image,txt1,txt2})=>{
    return (
    <div className='floatingdiv'>
{/* <img src={image} alt="crown image"/>
<img src={image} alt="thumbup image"/> */}
<img src={image} alt="crown image"/>
<span>
    {txt1}
    <br/>
    {txt2}
</span>

    </div>
    )
}

export default FloatingDiv;