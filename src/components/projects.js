import React from 'react';
import Avatar from 'material-ui/Avatar';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "./playground"
import Hozier from "./img/csseuxui-128.jpg"
import Paper from 'material-ui/Paper';
import {lightGreen400, grey200} from 'material-ui/styles/colors';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';


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
            cardHeaderTitle:"Operating Systems in C",
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
            backgroundColor: '#eeeeee'
         }
      };
   })()

   render(){
      var cards = this.data.map((row, i) => {
         return  <Paper key={i} style={this.styles.papers} zDepth={row.zDepth} rounded={false}><h3 style={{fontSize:18}}>{row.cardHeaderTitle}</h3>
            <div style={{backgroundColor: '#455a64', height: 230, paddingTop: 40}}>
               <Avatar
                  icon={<Fingerprint />}
                  backgroundColor={'#455a64'}
                  color={'#ffffff'}
                  size={200}
                  />
            </div>
         </Paper>
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
