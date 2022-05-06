import React from 'react';
import './servises.css';
import Cards from '../Cards/card'
import Resume from './resume.pdf';
import heartemoji from '../../img/heartemoji.png';
import humbleemoji from '../../img/humble.png';
import glasses from '../../img/glasses.png';
const servises=()=>{
    return (
    <div className='servises'>
        <div className='s-left'>
        <span>Our</span>
        <span>services</span>
        <span>We are poviding great servises of new commers</span>
        <a href={Resume} download>
        <button className='button s-button'>Download</button></a>
        <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side-card*/}
        <div className='s-right'>
        <div style={{left:'53rem'}}>
            <Cards
            emoji={heartemoji}
            heading={'Design'}
            detail={'Figma,Sketch,Adobe,Canva'}

            />
    
        </div>
        <div style={{top:'15rem',left:'30rem'}}>
        <Cards
            emoji={humbleemoji}
            heading={'Developer'}
            detail={'Html,Css,JavaScript,React'}
        />
</div>
<div style={{top:'23rem',left:'48rem'}}>
<Cards
            emoji={glasses}
            heading={'UI/UX'}
            detail={'Html,Css,JavaScript,React'}
        />
</div>
<div className='blur s-blur2' style={{background:'rgb(238 210 255)'}}></div>
        </div>
            
    </div>
    

    )
}

export default servises;