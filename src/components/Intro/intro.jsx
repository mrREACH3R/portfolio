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
import profile1 from '../../img/profile2.png'
import thumsup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import emoji from '../../img/glassesimoji.png'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import TypeWriterEffect from 'react-typewriter-effect';
const Intro=()=>{
const transition={duration: 2,type:'spring'}


    const theme = useContext(themeContext);
const darkMode=theme.state.darkMode;
    return(
       <div className='intro'>
            <div className='i-left'>
            <div className='i-name'>
           <span style={{color:darkMode?'white':''}}>Hello! I Am</span>
           <TypeWriterEffect
           textStyle={{
          fontSize: '3rem',
          fontWeight: 100,
        }}
            startDelay={100}
            cursorColor="orange"
            multiText={['Shubham Kumar','Welcome to my Portfolio',]}
            loop={true}
            typeSpeed={30}
            scrollArea={Intro}
            nextTextDelay={1000}
            hideCursorAfterText={true}
            hideCursor={true}
          />
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
           <img src={profile1} />
           <motion.img 
           initial={{left:'-36%'}}
           whileInView={{left:"-20%"}}
           transition={transition} src={emoji}/>
           <motion.img 
           initial={{left:'60%'}}
           whileInView={{left:"80%"}}
           transition={transition} src={thumsup}/>


           <motion.div
           initial={{left:'36%'}}
           whileInView={{left:"68%"}}
           transition={transition} style={{top:'-2%',left:'68%'}}
           className='floating-div'>
               <FloatingDiv image={crown} txt1='Web' txt2='Design'/>
           </motion.div>
           <motion.div 
           initial={{left:'-36%'}}
           whileInView={{left:"0%"}}
           transition={transition}
           style={{top:'18rem',left:'0rem'}}
           className='floating-div'>
               <FloatingDiv image={thumsup} txt1='Innotive' txt2='idea'/>
           </motion.div>
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
export default Intro;