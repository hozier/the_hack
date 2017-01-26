import React from 'react';
import Avatar from 'material-ui/Avatar';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "./playground"
import Paper from 'material-ui/Paper';
import Academic from 'material-ui/svg-icons/action/description';
import Collab from 'material-ui/svg-icons/action/dashboard';
import Code from 'material-ui/svg-icons/action/code';
import PaperEngine from "./paperEngine"


class ProjectsPage extends React.Component{

   datastore = () => {
      const base = 'https://github.com/hozier/'
      const array = [
         {
            cardHeaderTitle:"Play",
            zDepth:1,
            url:`${base}play`
         },
         {
            cardHeaderTitle:"The Hack",
            zDepth:2,
            url:`${base}the_hack`
         },
         {
            cardHeaderTitle:"RESTful APIs",
            zDepth:5,
            url:`${base}RESTful_API`
         },
         {
            cardHeaderTitle:"Longest Repeated String",
            zDepth:3,
            url:`${base}Longest_repeated_substring`
         },
         {
            cardHeaderTitle:"Operating Systems in C",
            zDepth:4,
            url:`${base}labs.cmpsci377`
         },
         {
            cardHeaderTitle:"DataDash by MBDTUI",
            zDepth:1,
            url:'https://github.com/mbdtui/DataDash'
         }
      ]
      return array
   }

   data = this.datastore()

   render(){
      this.cards = this.data.map((row, i) => {
            return <PaperEngine key={i} collection={[row]} svg={ <Code/> }></PaperEngine>
      })
      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Apps & Services</h2>
                        {this.cards.slice(0,0+2 +1)}
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Academic</h2>
                        {this.cards.slice(3,3+1 +1) }
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Collaborative</h2>
                        {this.cards.slice(5) }
                  </div>
               }
               maxWidth={1100}
               />
         </div>
      )
   }
};


export default withWidth()(ProjectsPage);
