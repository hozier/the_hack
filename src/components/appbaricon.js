import React from 'react';
import AppBar from 'material-ui/AppBar';
import OctoCat from "./octocat"
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import {lime500, grey800} from 'material-ui/styles/colors';
import {Link} from 'react-router';

class AppBarIcon extends React.Component{
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
         style={styles.appBar}
         onLeftIconButtonTouchTap={this.handleToggle}
         zDepth={0}
         />


         <Drawer open={this.state.open}>
         <Link to={"/"} style={{ textDecoration: 'none' }} >
            <Subheader style={
               {cursor: 'pointer', paddingTop: 16, color:grey800,
               background:lime500, }}
               onTouchTap={this.handleToggle} >/ the_hack >
            </Subheader>
         </Link>

         <Link to={"/monologues/"} style={{ textDecoration: 'none' }} >
            <MenuItem>Monologues</MenuItem>
         </Link>

         <Link to={"/projects/"} style={{ textDecoration: 'none' }} >
            <MenuItem>Projects</MenuItem>
         </Link>
         <MenuItem>About</MenuItem>
         </Drawer>
         </div>
      )
   }
}

// overview: defines styles used locally only for this component
let styles = (()=> {
   return {
      appBar: {
         position: 'fixed',
         titleFontWeight: 100,
         fontFamily: 'sans-serif-thin'
      }
   }
})()

export default AppBarIcon
