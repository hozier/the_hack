import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import {lightGreen400} from 'material-ui/styles/colors';
import {grey200} from 'material-ui/styles/colors';
import {pink300} from 'material-ui/styles/colors';

export function getStyles(){
   return {
      container: {
         textAlign: 'center',
         paddingTop: 200,
      },
      box:{
         background:lightGreen400,
         margin: 0,
         right: 0,
         bottom: 240,
         left: 'auto',
         paddingLeft: 175,
         paddingRight: 175,
         paddingTop: 35,
         paddingBottom: 75,
         textAlign: 'center',
      },
      introbox:{
         fontSize: 20,
         background:grey200,
         margin: 0,
         right: 0,
         bottom: 240,
         left: 'auto',
         paddingLeft: 500,
         paddingRight: 500,
         paddingTop: 30,
         paddingBottom: 30,
         textAlign: 'left',
         lineHeight: 5
      },
      appBar: {
         position: 'fixed',
         titleFontWeight: 100,
         fontFamily: 'sans-serif-thin'

      },
      palette:{
         primary1Color: lightGreen400,
         accent1Color: deepOrange500,
      }
   };
}
