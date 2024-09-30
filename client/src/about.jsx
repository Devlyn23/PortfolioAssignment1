/*File: about.jsx
Name: Devlyn Andersen
Student Number: 301444288
Date: 2024-09-27
*/

/*---------------------------------------------
               Import Assets:
---------------------------------------------*/
import { Link } from 'react-router-dom';
import profilepic from '../src/assets/profilepic.png'
import '../src/index.css'
import resume from '../src/assets/devlynResume.pdf';

/*---------------------------------------------
          About Page Function:
---------------------------------------------*/
export default function About() {
     /*---------------------------------------------
     Create all HTML Elements for About Page
     ---------------------------------------------*/
     return <>
     <div className="contaniner1">
     {/*Div section for defining the HTML for the about page content to be Displayed*/}
     <div className="aboutCont">
     <h1>Devlyn David Andersen</h1>
     <p className="textBody">I am Devlyn David Andersen, a Web Designer and Programmer with a passion for both fields. I enjoy working 
          with code and am well versed in popular coding languages including C#, Java, and Python. In web design I have a keen eye 
          for details making sure to follow best practices to design web pages that are easy to understand and are visually pleasing. 
          For web design I am well versed in the use of HTML, CSS and JavaScript for building web pages and applications. I am also 
          familiar with using React for building web apps. I aim for excellence and high accuracy in all my work and use my eye for 
          detail to ensure that what I produce functions correctly and efficiently.</p>
     <br/><br/>
     <img src={profilepic}alt="Profile Picture" className="profilepic" width="30%" height="70%"/>
     <a href={resume} className="resumelnk" target="_blank">View Resume</a>
     <br/><br/>
     </div>
     </div>
     <div className="FootSec1">
          <p className="FootText"><i>Copyright &#169; 2022 Devlyn Andersen.</i></p>
     </div>
     </>
    }
    