import React from "react"
import image from "./Covid.jpeg"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img6 from "./img6.jpg"

function Home(){
	return(
		<div>
		<div className = "homeRow1">
		
        
		<p className = "row1Para"> The COVID-19 pandemic has come with an unprecedented global economic crisis. 
                            The Indian government, RBI and various organisations have taken various response actions to this in order to push the Indian economy towards the path to recovery. 
                            Arthashastra Intelligence COVID-19 Economic Impact Dashboard reflects our continuous work on analysing government policy responses to COVID, studying state finances, 
                            and monitoring the performance of various macroeconomic indicators to bring you essential insights and real-time updates on Indian economy in the wake of COVID-19, all in one place.</p>
		
	
		<img src= {image} width = "20%" style = {{"objectFit":"cover"}}/>
		

		</div>

		<div className = "homeRow2">
		<div className = "homeRow2Col1">
		Map and graph

		</div>

		<div className = "homeRow2Col2">

		 <div className = "homesurvey">

		   <div className = "surveyTitle">Surveys</div>	

		   <div className = "survey" >
		   <div style = {{  "font-size": "1.25em" , "padding":"0.5rem 0 "}} > AI-CEID Economists Survey</div>
		   <div style = {{  "font-size": "0.75em" , "margin-bottom":"1rem"}}>Our survey aims to gather valuable insights from economists about the Indian economy. Help us analyse by filling the form:</div>
		   <a className = "homedoc" href="https://forms.gle/nG3e8HoSyUz7bY7k9" >Participate Now</a>
		   </div>

		 	<div className = "survey survey2" >	
		   <div style = {{  "font-size": "1.25em", "padding":"0.5rem 0"}}> AI-CEID Economists Survey</div>
		   <div style = {{  "font-size": "0.75em" , "margin-bottom":"1rem"}}>Our survey aims to gather valuable insights from economists about the Indian economy. Help us analyse by filling the form:</div>
	       <a className= "homedoc" href="https://forms.gle/tDbsVzi9izH1t3eY7" >Participate Now</a>
		   </div>

		 </div>


		</div>
		</div>




		<div className = "homeRow3">
		<div className = "homeRow3Col1">
		Table

		</div>



		<div className = "homeRow3Col2">

	
		 <p className = "articleHead">Articles</p>
		


		 <div>
		 <img src = {img1} style = {{"width":"100%"}}/>
		  <div className = "homeArticle">
		   <a  href ="/" className = "homeImage">Managing Multiple Github Accounts on a Single Machine.</a>
		   <p>2020-07-09 03:11:24</p>
		  </div>
		 </div>

		 <div>
		 <img  src = {img2} style = {{"width":"100%"}}/>
		 <a href ="/" className = "homeImage" >Decoding the Atmanirbhar Package</a>
		 <p>2020-07-09 03:11:24</p>
		 </div>

		 <div>
		 <img  src = {img3} style = {{"width":"100%"}}/>
		 <a href = "/"  className = "homeImage" >The Downfall of Indian Real Estate: COVID Effect or Fractures in the Foundation</a>
		 <p>2020-07-09 03:11:24</p>
		 </div>

		 <div>
		 <img  src = {img6} style = {{"width":"100%"}}/>
		 <a href ="/"  className = "homeImage">The Pre- and Post-COVID Outlook of State Finances</a>
		 <p>2020-07-09 03:11:24</p>
		 </div>

		 




		</div>

		
		






		</div>

		

		

		
		</div>

		)
}
export default Home