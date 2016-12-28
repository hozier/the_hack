/**
* In this file, we create a React component
* which incorporates components provided by Material-UI.
*/
import React, {Component} from 'react';
import {Homepage, getStyles, Dialog, FlatButton, RaisedButton,
   getMuiTheme, MuiThemeProvider}
   from "./lockerbox"

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

            <Homepage/>

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
