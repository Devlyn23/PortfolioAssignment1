/*File: service.jsx
Name: Devlyn Andersen
Student Number: 301444288
Date: 2024-09-27
*/

/*---------------------------------------------
               Import Assets:
---------------------------------------------*/
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import prog from '../src/assets/prog.png';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/service.css'

/*---------------------------------------------
          Services Page Function:
---------------------------------------------*/
export default function Services() {
     /*---------------------------------------------
     Create all HTML Elements for Services Page
     ---------------------------------------------*/
     return <>
     <div className="contaniner1">
     {/*Section for defining the HTML for the Skill Boxes to be Displayed*/}
     <section id="skill">     
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I am a skilled programmer and web designer with experience in creating visually appealing and user-friendly websites and programs. I have a strong understanding of design principals and an eye for detail.</span> 
          
          {/*Div Section for defining HTML for creating the UI design Skill box*/}
          <div className="skillBar">
               <img src={ux} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>UI/UX Design</h2>
               <p>I have experience utilizing best design principals for web applications and programming applications for UI and UX design. I have a good eye for detail to ensure easy user understandability for UIs.</p>
               </div>
          </div>

          {/*Div Section for defining HTML for creating the Web Design Skill box*/}    
          <div className="skillBar">
               <img src={web} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Web Design</h2>
               <p>I have a strong understanding of HTML, CSS, and Javascript for web design. I also have experience using React for creating web apps
                    and have a strong grasp of best design principals.</p>
               </div>
          </div>

          {/*Div Section for defining HTML for creating the Programming Skill box*/}
          <div className="skillBar">
               <img src={prog} alt="programming" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Programming</h2>
               <p>I have a strong grasp of C#, Java, and Python programming languages. I also have a solid foundation in the other C languages for programming. I have a good understanding of creating windows form applications using C#.</p>
               </div>
          </div>             
     </section>
     </div>
     <div className="FootSec2">
          <p className="FootText"><i>Copyright &#169; 2022 Devlyn Andersen.</i></p>
     </div>
     </>
     }
    