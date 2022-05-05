import react from 'react'
import './intro.css'
import FloatingDiv from '../FloatingDiv/floatingDiv';
// import { FaGithub } from 'react-icons/fa';
// import { RiInstagramFill} from 'react-icons/ri';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { BsHandThumbsUp } from 'react-icons/bs';
// import {BiCrown } from 'react-icons/bi';
// import blueBack from '../../img/1.png'
// import YellowBack from '../../img/2.png'
import profile from '../../img/profile.png'
import thumsup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import emoji from '../../img/glassesimoji.png'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'
const intro=()=>{
    return(
       <div className='intro'>
            <div className='i-left'>
            <div className='i-name'>
           <span>Hy! I Am</span>
           <span>Shubham Kumar</span>
           <span>ashsgdgtdgddy</span>

       </div>
       <button className='button i-button'>Approach me</button>
       <div className='i-icons'>
           
           {/* <FaGithub size={50}/>
           <RiInstagramFill size={50}/>
           <AiFillLinkedin size={50}/> */}
           <img src={github} size={50}/>
           <img src={instagram}/>
           <img src={linkedin}/>
           </div>
           </div>

           <div className='i-right'>
        
           {/* <img src={blueBack} />
           <img src={YellowBack} /> */}
           <img src={profile} />
           <img src={emoji}/>
           <img src={thumsup}/>
           <div style={{top:'-2%',left:'68%'}}>
               <FloatingDiv image={crown} txt1='Web' txt2='Design'/>
           </div>
           <div style={{top:'18rem',left:'0rem'}}>
               <FloatingDiv image={thumsup} txt1='Innotive' txt2='idea'/>
           </div>
           {/* blur div */}
          <div className='blur' style={{background:"rgb(238 210 255)"}}>

          </div>
          <div className='blur' style={{
              background:'#C1F5FF',
              top:'17rem',
              width:'25rem',
              height:'15rem',
              left:'-3rem'
          }}></div>

           </div>
       </div>
    )
}
export default intro;