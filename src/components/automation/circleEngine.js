import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {deepOrange300, grey900 } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';

class PaperEngine extends React.Component{
   styles = (() => {
      return {
         circles:{
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
         },
      };
   })()

   state = {
      open: false,
      depth: 5
   };

   handleMouseEnter = () => {
      this.setState({
         open: true,
         depth: 2
      });
   };

   handleMouseLeave = () => {
      this.setState({
         open: false,
         depth: 5
      });
   };

   circleEngine = (avatarIcon, backgroundColor, foregroundColor, snackBarMessage) => {
      return(
         <Paper style={this.styles.circles} zDepth={this.state.depth} circle={true}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
            <Avatar
               icon={avatarIcon}
               size={101}
               backgroundColor={backgroundColor}
               color={foregroundColor}
               />
            <Snackbar
               open={this.state.open}
               message={snackBarMessage}
               />
         </Paper>
      )
   }

   render(){
      return (
         this.circleEngine(this.props.avatarIcon, this.props.backgroundColor, this.props.foregroundColor, this.props.snackBarMessage)
      )
   }
}

export default PaperEngine
