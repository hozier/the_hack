/**
* In this file, we create a React component
* which incorporates components provided by Material-UI.
*/
import React, {Component} from 'react';
import {lightGreen400, pink300} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Avatar from 'material-ui/Avatar';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import Hozier from "./img/csseuxui-128.jpg"
import AppBarIcon from "./appbaricon"
import {getStyles} from "./styles"

const styles = getStyles()
const muiTheme = getMuiTheme({
   palette: styles.palette
});


class App extends Component {
   constructor(props, context) {
      super(props, context);

      this.handleRequestClose = this.handleRequestClose.bind(this);
      this.handleTouchTap = this.handleTouchTap.bind(this);
      this.state = {
         open: false,
      };
   }

   handleRequestClose() {
      this.setState({
         open: false,
      });
   }

   handleTouchTap() {
      this.setState({
         open: true,
      });
   }

   render() {
      const standardActions = (
         <FlatButton
         label="Ok"
         primary={true}
         onTouchTap={this.handleRequestClose}
         />
      );

      return (
         <MuiThemeProvider muiTheme={muiTheme}>
         <div style={{fontWeight: '100'}}>
         <AppBarIcon></AppBarIcon>

         <div style={styles.box}>
         <Avatar
            icon={<Fingerprint />}
            backgroundColor={lightGreen400}
            size={300}
         />
         <h1>  / the_hack > </h1>
         <p>An Anthology of Thoughts Stitched Together by #code</p>
         <RaisedButton label="Explore" style={{margin: 12}} />
         </div>

         <div style={styles.introbox}>
         <p>
         <Avatar
            src={Hozier}
            size={100}
            style={{marginRight:20, marginBottom:-40}}
         />
         My attraction to design is what drives my interest of <span style =
         {{color:pink300}}>user interfaces</span>, <span style =
         {{color:pink300}}>software engineering</span> and <span style =
         {{color:pink300}}>the users experience</span>. I am a recent graduate
         from the School of Computer Science at the University of Massachusetts
         Amherst.
         </p>
         </div>

         <div style={styles.container}>

         <Dialog
         open={this.state.open}
         title="Super Secret Password"
         actions={standardActions}
         onRequestClose={this.handleRequestClose}
         >
         1-2-3-4-5
         </Dialog>

         <h1>Material-UI</h1>
         <h2>example project</h2>
         <RaisedButton
         label="Super Secret Password"
         secondary={true}
         onTouchTap={this.handleTouchTap}
         />
         </div>
         </div>
         </MuiThemeProvider>
      );
   }
}


export default App;
