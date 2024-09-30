/*File: Home.jsx
Name: Devlyn Andersen
Student Number: 301444288
Date: 2024-09-27
*/

/*---------------------------------------------
               Import Assets:
---------------------------------------------*/
import profilepic from '../src/assets/profilepic.png';
import { Link } from 'react-router-dom';
import '../src/index.css'

/*---------------------------------------------
          Home Page Function:
---------------------------------------------*/
export default function Home() {
     /*---------------------------------------------
     Create all HTML Elements for Home Page
     ---------------------------------------------*/
     return <>

     {/*Section for defining the HTML for the intoduction info to be Displayed*/}
     <div className="contaniner1">
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello, and Welcome</span><br/>
          <span className="introText">I am <span><i>Devlyn Andersen</i></span> 
          <img src={profilepic} alt="profile" className="profile" width="30%" height="70%"/>
          <br/>Programmer and Website Designer</span>
          <p className="introPara">I am a skilled programmer and web designer with experience in creating visually appealing user 
               friendly websites and applications.</p>
          <Link className="abtpg" to="/about">About Me</Link>
          <br/><br/>
          <h5>Mission</h5>
          <p className="missionPara"><i>I aim to provide excelence and acuracy for all your programming and web design needs.</i></p>
          </div><br/><br/>
     </section>
     </div>
     <div className="FootSec">
          <p className="FootText"><i>Copyright &#169; 2022 Devlyn Andersen.</i></p>
     </div>
     </>
     }
    