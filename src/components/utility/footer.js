import React from 'react';
import {grey900} from 'material-ui/styles/colors';

class Footer extends React.Component{

   render(){
      return (
         <div style={{textAlign:'center', fontFamily: 'Roboto', fontSize:12, backgroundColor:grey900, color:'#ffffff'}}>
            <br/><br/><br/>
            {'< > with ♥ using NodeJS, ReactJS and Material-UI'}

            <div style={{textAlign:'left', paddingLeft: 47, zDepth:5, fontSize:15}}>
               <br></br>
               Bike Coop <span style={{fontFamily: 'Times', fontSize:12}}>by the Product <sup>co. </sup>
            <span style={{fontSize:9}}>EST 2o15.</span>
            </span> <br/>
            </div>
            <div style={{textAlign:'left', paddingLeft: 47}}>All Rights Reserved 2017.</div>
            <br/><br/>
         </div>
      )
   }
}

export default Footer
