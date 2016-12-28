import React from 'react';
import IconButton from 'material-ui/IconButton';
import '../index.css';

class OctoCat extends React.Component {
   constructor(props){
      super(props)
   }

   render(){
      return(
         <IconButton
         iconClassName="muidocs-icon-custom-github"
         href="https://github.com/hozier">
         </IconButton>
      )
   }

}

export default OctoCat;
