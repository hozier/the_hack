import React from 'react';
import AppBar from 'material-ui/AppBar';
import OctoCat from "./octocat"
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import {getStyles} from "./styles"
import {lightGreen400} from 'material-ui/styles/colors';

const styles = getStyles()

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
         iconElementRight={<OctoCat></OctoCat>}

         style={styles.appBar}
         onLeftIconButtonTouchTap={this.handleToggle}
         zDepth={0}
         />


         <Drawer open={this.state.open}>
         <Subheader style={
            {cursor: 'pointer', paddingTop: 16, color:'#ffffff',
            background:lightGreen400, fontWeight: '100'}}
            onTouchTap={this.handleToggle} >/ the_hack >
         </Subheader>
         <MenuItem>Monologues of An Engineer</MenuItem>
         <MenuItem>Projects</MenuItem>
         <MenuItem>About</MenuItem>
         </Drawer>
         </div>
      )
   }
}

export default AppBarIcon
