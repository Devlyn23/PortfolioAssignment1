/*File: project.jsx
Name: Devlyn Andersen
Student Number: 301444288
Date: 2024-09-27
*/

/*---------------------------------------------
               Import Assets:
---------------------------------------------*/
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.png';
import project3 from '../src/assets/project3.png';
import project4 from '../src/assets/project4.png';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'

/*---------------------------------------------
          Project Page Function:
---------------------------------------------*/
export default function Project() {
     /*---------------------------------------------
     Create all HTML Elements for Project Page
     ---------------------------------------------*/
     return <>
     <div className="contaniner1">
     {/*Section for defining the HTML for the projects to be Displayed*/}
     <section id="Projsec">
          <h2 className="ProjTitle">My Projects</h2>
          <span className="ProjDesc">I take pride in paying attention to all the fine details and making sure my work is filled with both
               excelence and highest degree of accuracy for all your buisness needs.</span> 
          <br/>
          <hr/>
          <div className="projbox">
          <p className="projtitle">Image Gallery Favourites Page:</p>
          <img src={project1} alt="project1" className="ProjectImg"/>
          <p className="projbody">In this project I created a webpage using HTML, CSS and Javascript to make a galery of images
               where the visitor can select images to view them in larger form then add them to a favourites list. The items in the favourites
               list can also be selected to view in larger detail and can be be removed from the list. I performed the javascript coding to 
               provide the functionality for the webpage as well as edited the formating and styling of the page to provide a pleasing and easy
               to follow organization. Click the below to try it for yourself!  
          </p>
          <a className="projlink" href="http://studentweb.cencol.ca/dander78/Assignment%202-125/Assignment2.html" target="_blank">View Page</a>
          </div>
          <br/><hr/>
          <div className="projbox">
          <p className="projtitle">Tribble Catcher Clicking Game:</p>
          <img src={project2} alt="project2" className="ProjectImg"/>
          <p className="projbody">For this project I created a short web page game called Tribble Catcher, the user clicks on the image of the Tribble,
               which jumps around the game space, to catch it. When clicked the score increases and the Tribble moves to a new location, the
               time between jumps is also decreased to make the difficulty harder. There are options for reseting the jump speed and time for 
               the game. For this project I designed and performed all the javascript coding for the functionality as well as the HTML for the 
               overall design of the page, I also wrote and implemented the CSS for the page to ensure the best design and organization. Overall
               this short game demonstrates my abilities in writing and integrating Javascript, HTML, and CSS. Click the below to try it for yourself! 
          </p>
          <a className="projlink" href="http://studentweb.cencol.ca/dander78/Assignment%203-125/Assignment%203.html" target="_blank">View Page</a>
          </div>
          <br/><hr/>
          <div className="projbox">
          <p className="projtitle">Prime Ministers Information Form:</p>
          <img src={project3} alt="project3" className="ProjectImg"/>
          <p className="projbody">For this project I made a C# form application that provided information on several Canadian prime ministers.
               When a prime minister is selected in the displayed list, an image of that prime minister is shown as well as biographical information.
               For this assignment I performed the coding in C# and organized the form design in Visual Studio 2022. The code is designed to deserialize Json information
               from a file about each prime minister and turn it into a custom created dictionary objects for display when the matching prime 
               minister is selected from the list. I performed all coding and design for this project and used a keen eye for detail to ensure 
               all information was acurate and the design format was pleasing.
          </p>
          </div>
          <hr/>
          <div className="projbox">
          <p className="projtitle">Fraction Calculator Form:</p>
          <img src={project4} alt="project4" className="ProjectImg"/>
          <p className="projbody">For this project I created a C# form application that allows the user to input 2 fractions and perform
               addition, subtraction, multiplication and division on the two entered fractions. Fot this project I performed all coding using 
               C# and designed the form in Visual Studio 2022. I created all the mathematical functions for addition, subtraction, multiplication
               and division using fractions and designed the form to be visually apealing as well as easy to comprehend and utilize by any user.
          </p>
          </div>
          <hr/><br/><br/>
     </section>
     </div>
     <div className="FootSec2">
          <p className="FootText"><i>Copyright &#169; 2022 Devlyn Andersen.</i></p>
     </div>
     </>
    }
    