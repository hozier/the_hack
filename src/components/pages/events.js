import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import Build from 'material-ui/svg-icons/device/widgets';
import Code from 'material-ui/svg-icons/maps/layers';
import {redA200, grey600} from 'material-ui/styles/colors';
import CardEngine from "../automation/cardEngine"
import Facebook from "../img/facebook.png"
import Labor from 'material-ui/svg-icons/action/build';

class EventsPage extends React.Component{

   datastore = () => {
      const powderedBlue = '#eff3ff'
      const array = [
         {
            cardHeaderTitle:"Dirk Diggler",
            cardHeaderSubtitle:"Spring 2017",
            cardBodyTitle:"Friend Us On Facebook!",
            cardBodySubtitle:"UMass Bike Coop",
            backgroundColor:"#3b5998",
            svgColor:'#3b5998',
            imgSrc:
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139">
                  <g fill="#ffffff" stroke="2">
                     <path d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
                        c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
                        v20.341H37.29v27.585h23.814v70.761H89.584z"/>
                  </g>
               </svg>
            </div>
            ,
         CardText:'For our most up-to-date events, follow UMass Bike Coop on Facebook. Thanks!'
         }
      ]
      return array
   }

   data = this.datastore()

   render(){
      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Events</h2>
                     <a href='https://www.facebook.com/Umass.Bike.Coop/' style={{ textDecoration: 'none' }}>
                        {this.data.map((row, i) => {
                              return <CardEngine key={i} collection={[row]}></CardEngine>
                        })}
                     </a>
                  </div>
               }
               maxWidth={900}
               />
         </div>
      )
   }
};


export default withWidth()(EventsPage);
