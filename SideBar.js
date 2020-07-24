import React,{useState , useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import HomeIcon from '@material-ui/icons/Home';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BarChartIcon from '@material-ui/icons/BarChart';
import StoreIcon from '@material-ui/icons/Store';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import logo from './ai.png';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import BookIcon from '@material-ui/icons/Book';
import GroupIcon from '@material-ui/icons/Group';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CreateIcon from '@material-ui/icons/Create';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Hidden } from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import {Collapse} from "reactstrap";
import MainPage from "./MainPage";
import useWindowD from "./useWindow"



function SideBar() {
 
  const [open, setOpen] = useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

   var [collapse1, setcollapse1] = useState(false);

 const toggle1 = () =>{
  setcollapse1(!collapse1);
 }

   var [collapse2, setcollapse2] = useState(false);

 const toggle2 = () =>{
  setcollapse2(!collapse2);
 }


 const {width , height} = useWindowD();

    let blurImg = "0";
   let margin = "0";
   let see = "0"; 


  if(open)
  {
    if(width >"650")  
      margin = "260px";

  }

 if(open && width <="650")
 {
  blurImg = "4px";
 }



  




  
  
  return (
    <div style = {{"display":"flex"}}>



      <header className  = "header" >
        <IconButton id = "icon" 
        onClick={handleDrawerOpen} 
        edge="start">
            <MenuIcon/>
        </IconButton>
        <h1 className = "headerH1"> AI-COVID-19 Economic Impact Dashboard (CEID)</h1>
      </header>



      

      <Drawer variant="persistent" anchor="left" open={open}>

         <div style = {{"width":"260px"}}>

           <div style = {{"display":"flex" , "backgroundColor":"#000000" }}>

            <img src = {logo} alt = 'Logo' width = "80%"/>
            <IconButton style = {{"color":"#FFFFFF"}}
            onClick = {handleDrawerClose} >
            <ChevronLeftIcon/>
            </IconButton>

           </div>


     <List className = "sidebarList">

          <a  href="/">
                  <ListItem >
                      < ListItemIcon><HomeIcon /> </ListItemIcon>
                      < ListItemText>Home</ListItemText>

                  </ListItem>
                 
          </a>
          <Divider/>
         

            <div style = {{"margin-bottom":"10px" }}>
            <a style = {{"color":"black"}} href="/Key Macroeconomic Indicators/#">
                  <ListItem className = "listItem">
                      < ListItemIcon ><AssessmentIcon /> </ListItemIcon>
                      < ListItemText >Economic Indicators </ListItemText>

                  </ListItem>
             </a>
             <div style={{left:'85%',position:'relative',marginLeft:'0vw',marginTop:'-8vh',width:'100%'}}>
                <button onClick={toggle1} className = "collapseButton">{collapse1?<><IconExpandLess/></>:<><IconExpandMore/> </>}</button>
            </div> 
            </div>
           



           <Collapse isOpen={(window.location.pathname!='/Key%20Macroeconomic%20Indicators/') ?  collapse1: !collapse1} >
           <Divider/>


      
       <a style={{textDecoration:'none' ,color:"black" }} href="/Key%20Macroeconomic%20Indicators/#Production">
       <ListItem  >
           < ListItemIcon>{<LocationCityIcon /> }</ListItemIcon>
           < ListItemText >Production</ListItemText>
       </ListItem>
       </a> 
       <a style={{textDecoration:'none' ,color:"black"}} href="/Key%20Macroeconomic%20Indicators/#Output">
       <ListItem >
           < ListItemIcon >{<StoreIcon /> }</ListItemIcon>
           < ListItemText  >Output</ListItemText>
           
       </ListItem>
       </a> 
       <a style={{textDecoration:'none' ,color:"black"}} href="/Key%20Macroeconomic%20Indicators/#Prices">
       <ListItem button>
           < ListItemIcon >{<LocalOfferIcon/> }</ListItemIcon>
           < ListItemText  >Prices</ListItemText>
       </ListItem>
       </a> 
       <a style={{textDecoration:'none',color:"black"}} href="/Key%20Macroeconomic%20Indicators/#Labour Participation Rate">
       <ListItem button>
           < ListItemIcon >{<ContactMailIcon /> }</ListItemIcon>
           
           < ListItemText  >Employment</ListItemText>
       </ListItem>
       </a> 
       <a style={{textDecoration:'none',color:"black"}} href="/Key%20Macroeconomic%20Indicators/#Intrest rates">
       <ListItem button>
           < ListItemIcon >{<SwapVerticalCircleIcon /> }</ListItemIcon>
           < ListItemText  >Interest rates</ListItemText>
           
       </ListItem>
       </a> 
       <a style={{textDecoration:'none',color:"black"}} href="/Key%20Macroeconomic%20Indicators/#Stock Market">
       <ListItem button>
           < ListItemIcon >{<ShowChartIcon/> }</ListItemIcon>
           < ListItemText  >Stock Market</ListItemText>
       </ListItem>
       </a> 
       <a style={{textDecoration:'none',color:"black"}} href="/Key%20Macroeconomic%20Indicators/#Commodities">
       <ListItem button>
           < ListItemIcon >{<BarChartIcon /> }</ListItemIcon>
           < ListItemText  >Commodities</ListItemText>
       </ListItem>
       </a> 
       <Divider/>
   </Collapse>
   

   

              <div style = {{"margin-bottom":"10px"}}>
              <a style={{textDecoration:'none' , "color":"black"}} href="/Statefinances/#">
                  <ListItem className = "listItem">
                      < ListItemIcon >{<AccountBalanceWalletIcon /> }</ListItemIcon>
                      < ListItemText  >State Finances</ListItemText>
                  </ListItem>
              </a>
              <div style={{left:'85%',position:'relative',marginLeft:'0vw',marginTop:'-8vh',width:'100%'}}>
                 <button onClick={toggle2} class="collapseButton" >{collapse2?<><IconExpandLess/></>:<><IconExpandMore/> </>}</button>
               </div> 
               </div>
              
               <Collapse  isOpen={(window.location.pathname!='/Statefinances/') ?  collapse2: !collapse2}   >
                <Divider/>
      
                    
                    <a style={{textDecoration:'none' , "color":"black"}} href="/Statefinances/#GST Collections">
                    <ListItem >
                        < ListItemIcon >{<ReceiptIcon /> }</ListItemIcon>
                        < ListItemText  >GST Collections</ListItemText>
                    </ListItem>
                    </a> 
                    <a style={{textDecoration:'none',"color":"black"}} href="/Statefinances/#Statedeficit">
                    <ListItem >
                        < ListItemIcon >{<HomeIcon /> }</ListItemIcon>
                        < ListItemText  >Deficit Figures</ListItemText>
                    </ListItem>
                    </a> 
                    <a style={{textDecoration:'none',"color":"black"}} href="/Statefinances/#Publichealth">
                    <ListItem >
                        < ListItemIcon >{<HomeIcon /> }</ListItemIcon>
                        < ListItemText  >Public Health</ListItemText>
                    </ListItem>
                    </a> 
                    <a style={{textDecoration:'none',"color":"black"}} href="/Statefinances/#Debtprofile">
                    <ListItem >
                        < ListItemIcon>{<HomeIcon /> }</ListItemIcon>
                        < ListItemText >Debt Profile</ListItemText>
                    </ListItem>
                    </a> 
                  <Divider/>
                </Collapse>
     
             

















               <a  href="/Fiscal Policy Measures">
                  <ListItem >
                      < ListItemIcon ><GroupIcon /> </ListItemIcon>
                      < ListItemText >Fiscal Policy</ListItemText>
                  </ListItem>
              </a>
             

               <a href="/Monetary Policy Measures" >
                <ListItem>
                      < ListItemIcon> <AccountBalanceIcon/> </ListItemIcon>
                      < ListItemText> Monetary Policy </ListItemText>
                </ListItem>
               </a>
                 <Divider/>
 
               <a href="/Blog" >
                <ListItem >
                      < ListItemIcon ><CreateIcon/> </ListItemIcon>
                      < ListItemText >Blog</ListItemText>
                  </ListItem>
                 </a>
                <a href="/Report" >
                  <ListItem >
                      < ListItemIcon ><BookIcon /> </ListItemIcon>
                      < ListItemText >Report</ListItemText>
                  </ListItem>
                </a>
         </List>

         </div>

       </Drawer>
      

      <div  style={{"margin-top":"50px" , "margin-left":margin ,"z-index":"-100", "filter":"blur("+blurImg+")"}}>
      
      <MainPage/>
      
      <footer style = {{"padding":"5px" , "backgroundColor":"black" , "color":"white" , "textAlign":"center"}}>Powered by Arthashastra Intelligence</footer>

      </div>
    

    </div>
  )
}

export default SideBar
