/**
* In this file, we create a React component
* which incorporates components provided by Material-UI.
*/
import {deepOrange500, lime500}
from 'material-ui/styles/colors';
import React, {Component} from 'react';
import AppBarIcon from "./utility/appbaricon"
import {getMuiTheme, MuiThemeProvider}
   from "./utility/lockerbox"
import Footer from "./utility/footer"

const muiTheme = getMuiTheme({
   palette: {
      primary1Color: lime500,
      accent1Color: deepOrange500,
   }
});

class App extends Component {

   render() {
      return (
         <MuiThemeProvider muiTheme={muiTheme}>
         <div style={{fontWeight: '100'}}>
            <AppBarIcon/>
            {this.props.children}
            <Footer/>
         </div>
         </MuiThemeProvider>
      );
   }
}


export default App;
