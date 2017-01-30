import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import Academic from 'material-ui/svg-icons/action/description';
import Collab from 'material-ui/svg-icons/action/dashboard';
import Code from 'material-ui/svg-icons/action/code';
import PaperEngine from "../automation/paperEngine"

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
         },
         {
            cardHeaderTitle:"Catchpoint Search for Splunk",
            zDepth:1,
            url:`https://splunkbase.splunk.com/app/3223/`
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
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Apps & Services</h2>{
                        this.data.slice(0,0+2 +1).concat(this.data.slice(7)).map((row, i) => {
                              return <PaperEngine key={i} collection={[row]} svg={ <Code/> }></PaperEngine>
                        })}

                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Academic</h2>{
                        this.data.slice(3,3+1 +1).map((row, i) => {
                              return <PaperEngine key={i} collection={[row]} svg={ <Academic/> }></PaperEngine>
                        })}
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Collaborative</h2>{
                        this.data.slice(5, 5+1 +1).map((row, i) => {
                              return <PaperEngine key={i} collection={[row]} svg={ <Collab/> }></PaperEngine>
                        })}
                  </div>
               }
               maxWidth={1100}
               />
         </div>
      )
   }
};


export default withWidth()(ProjectsPage);
