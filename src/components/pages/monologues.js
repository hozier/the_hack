import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../playground"
import Build from 'material-ui/svg-icons/device/widgets';
import Code from 'material-ui/svg-icons/maps/layers';
import {redA200, grey600} from 'material-ui/styles/colors';
import CardEngine from "../automation/cardEngine"

class MonologuesPage extends React.Component{

   datastore = () => {
      const powderedBlue = '#eff3ff'
      const array = [
         {
            cardHeaderTitle:"P. William Hozier",
            cardHeaderSubtitle:"Janurary 22, 2017",
            cardBodyTitle:"Component-Driven Development",
            cardBodySubtitle:"Thinking in ReactJS with NodeJS + Material Design",
            backgroundColor:powderedBlue,
            svgColor:redA200,
            imgSrc:<Build/>,
            CardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
         },
         {
            cardHeaderTitle:"P. William Hozier",
            cardHeaderSubtitle:"Janurary 22, 2017",
            cardBodyTitle:"Thinking in C",
            cardBodySubtitle:"From Data Structures to Algorithms",
            backgroundColor: powderedBlue,
            svgColor:grey600,
            imgSrc:<div style={{paddingTop: 110, fontFamily:'Times'}}>C</div>,
            CardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
         },
         {
            cardHeaderTitle:"P. William Hozier",
            cardHeaderSubtitle:"Janurary 22, 2017",
            cardBodyTitle:"Algorithms",
            cardBodySubtitle:"A Mathematical Science",
            backgroundColor:redA200,
            svgColor:powderedBlue,
            imgSrc:<Code/>,
            CardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>An Engineer's Monologue</h2>
                     {this.data.map((row, i) => {
                           return <CardEngine key={i} collection={[row]}></CardEngine>
                     })}
                  </div>
               }
               maxWidth={900}
               />
         </div>
      )
   }
};


export default withWidth()(MonologuesPage);
