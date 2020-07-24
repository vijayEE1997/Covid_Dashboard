import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home"
import Monetary from "./MonetaryPolicy"
import Fiscal from "./FiscalPolicy"
import Blog from "./blog"
import StateFinances from "./StateFinances"
import MacroIndicators from "./MacroIndicators"

function MainPage(){
	return(
		<div style = {{"padding":"5%"}}>



		<Router >
             <Switch>
                  <Route exact path="/" render={props => <Home {...props} />}/>
                  <Route exact path='/Fiscal Policy Measures'><Fiscal/></Route>
                  <Route exact path='/Key Macroeconomic Indicators'><MacroIndicators/></Route>
                  <Route exact path='/Statefinances'><StateFinances/></Route>
        
                 <Route exact path='/Monetary Policy Measures'><Monetary/></Route>
                 <Route exact path='/Blog'><Blog/></Route>



              </Switch>
           </Router>

		</div>  





		)
}
export default MainPage