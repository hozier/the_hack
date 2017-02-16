import React from 'react';
import AppBar from 'material-ui/AppBar';
import OctoCat from "./octocat"
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import {amber400, grey800} from 'material-ui/styles/colors';
import {Link} from 'react-router';

class AppBarIcon extends React.Component{
   // overview: defines styles used locally only for this component
   styles = (()=> {
      return {
         appBar: {
            position: 'fixed',
            titleFontWeight: 100,
            fontFamily: 'sans-serif-thin'
         }
      }
   })()

   constructor(props){
      super(props)
      this.state = {open:false}
   }

   handleToggle = () => this.setState({open: !this.state.open});

   render(){
      return(
         <div style={{fontWeight: '100'}}>
            <AppBar
            iconElementRight={<OctoCat/>}
            style={this.styles.appBar}
            onLeftIconButtonTouchTap={this.handleToggle}
            zDepth={0}
            />


            <Drawer open={this.state.open}>
               <Link to={"/"} style={{ textDecoration: 'none' }} >
                  <Subheader style={
                     {cursor: 'pointer', paddingTop: 16, color:grey800,
                     background:amber400, }}
                     onTouchTap={this.handleToggle} >Bike Coop
                  </Subheader>
               </Link>

               <Link to={"/events/"} style={{ textDecoration: 'none' }} >
                  <MenuItem onTouchTap={this.handleToggle}>Events</MenuItem>
               </Link>

               <Link to={"/prices/"} style={{ textDecoration: 'none' }} >
                  <MenuItem onTouchTap={this.handleToggle}>Prices</MenuItem>
               </Link>

               <Link to={"/about/"} style={{ textDecoration: 'none' }} >
                  <MenuItem onTouchTap={this.handleToggle}>About</MenuItem>
               </Link>
            </Drawer>
         </div>
      )
   }
}

export default AppBarIcon
