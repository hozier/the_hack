import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import withWidth from 'material-ui/utils/withWidth';
import FlatButton from 'material-ui/FlatButton';
import Playground from "./playground"
import Hozier from "./img/csseuxui-128.jpg"
import Technologies from "./img/THxTPC_600-337.png"
import Paper from 'material-ui/Paper';
import {grey200} from 'material-ui/styles/colors';


class ProjectsPage extends React.Component{

   datastore = () => {
      const array = [
         {
            cardHeaderTitle:"Play",
            zDepth:1
         },
         {
            cardHeaderTitle:"The Hack",
            zDepth:2
         },
         {
            cardHeaderTitle:"Longest Repeated String",
            zDepth:3
         },
         {
            cardHeaderTitle:"CMPSCI377 Labs",
            zDepth:4
         },
         {
            cardHeaderTitle:"RESTful APIs",
            zDepth:5
         },
      ]
      return array
   }

   data = this.datastore()

   styles = (() => {
      return {
         papers:{
            height: 325,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
         }
      };
   })()

   render(){
      var cards = this.data.map((row, i) => {
         return  <Paper key={i} style={this.styles.papers} zDepth={row.zDepth} rounded={false}><h3 style={{fontSize:18}}>{row.cardHeaderTitle}</h3></Paper>
      })

      return <Playground
         payload={
            <div>
               <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects</h2>
               {cards}
            </div>
         }
         maxWidth={1100}
         />
   }
};


export default withWidth()(ProjectsPage);
