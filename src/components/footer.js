import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {grey900} from 'material-ui/styles/colors';


class Footer extends React.Component{

   render(){
      return (
         <div style={{textAlign:'center', fontFamily: 'Roboto', fontSize:12, backgroundColor:grey900, color:'#ffffff'}}>
            <br/>
            <br/>
            <br/>
            <br/>
            {'< > with ♥ using NodeJS, ReactJS and Material-UI'}


            <div style={{textAlign:'left', paddingLeft: 50, zDepth:5, fontSize:15}}>
               <br></br>
               / the_hack > by The Product Co. <br/>
            </div>
            <div style={{textAlign:'left', paddingLeft: 50}}>All Rights Reserved 2017.</div>
            <br></br>
            <br></br>
         </div>
      )
   }
}

export default Footer
