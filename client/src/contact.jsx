/*File: contact.jsx
Name: Devlyn Andersen
Student Number: 301444288
Date: 2024-09-27
*/

/*---------------------------------------------
               Import Assets:
---------------------------------------------*/
import '../src/contact.css'
import { useNavigate } from 'react-router-dom'

/*---------------------------------------------
          Services Page Function:
---------------------------------------------*/
export default function Contact() {

     /*----------------------------------------------------------------------
          Navigation Function: Redirects to Home Page when Form Submitted
     ----------------------------------------------------------------------*/
     const navigate = useNavigate();

     const handleSubmit = (event) => {
          navigate('/');
     };
     /*---------------------------------------------
     Create all HTML Elements for Contact Page
     ---------------------------------------------*/
     return (
     <>
     <div className="contaniner1">
     {/*Section for defining the HTML for the Contact information to be Displayed*/}
     <p className="head">Contact Information:</p>
     <p className="body"><i>Call me at: <strong>705-816-6147</strong></i></p>
     <p className="body"><i>Email:</i> dander78@my.centennialcollege.ca</p>
     <br/>
     <p className="head">Contact Me:</p>

     {/*Section for defining the HTML for the contacf form*/}
     <form id="ffp" onSubmit={handleSubmit}>
		<label htmlFor="myFName"> *First Name: </label>
		<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br />
				
		<label htmlFor="myLName"> *Last Name: </label>
		<input type="text" id="myLName" name="myLName" required="required"/><br/>
				
		<label htmlFor="myEmail"> *Email: </label>
		<input type="email" id="myEmail" name="myEmail" required="required"/><br/>

          <label htmlFor="myPhone"> *Phone: </label>
		<input type="phone" id="myPhone" name="myPhone" required="required"/><br/><br/>
				
		<input type="submit" className="submit" value="submit"/><br/>
	</form><br></br>
     </div>
     <div className="FootSec2">
          <p className="FootText"><i>Copyright &#169; 2022 Devlyn Andersen.</i></p>
     </div>
     </>
     );
     }
    