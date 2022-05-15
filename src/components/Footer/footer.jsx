import React from 'react'
import './footer.css'
import Wave from '../../img/f-image.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Git from '@iconscout/react-unicons/icons/uil-github'
const footer=()=>{

    return(

<div className='footer'>
    <img src={Wave} alt="" style={{
        width:'100%'}}/>
        <div className='f-content'>
<span>2005965@kiit.ac.in</span>
<div className='f-icons'>
  <Insta color='white' size='3rem'/>
  <Face color='white' size='3rem'/>
  <Git color='white' size='3rem'/>
</div>
        </div>
</div>
    )
}

export default footer;