import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import Academic from 'material-ui/svg-icons/action/description';
import Collab from 'material-ui/svg-icons/action/dashboard';
import Code from 'material-ui/svg-icons/action/code';
import PaperEngine from "../automation/paperEngine"
import {redA200, deepOrange300, grey900} from 'material-ui/styles/colors';


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

   stylePaper = ((row, i, bg, fg)=>{
      return {
         margin:8,
         color: fg,
         background:bg,
         headerBackground:bg,
         key:i,
         collection:[row]
      }
   })

   data = this.datastore()

   render(){
      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{color: grey900, fontWeight: '100', lineHeight: '30px' }}>About <hr/> <span style={{fontFamily: 'Times', fontSize:20}}> the Product <sup>co. </sup>
                  <span style={{fontSize:25}}>EST 2o15.</span>
                  </span> <br/></h2>
                     {
                     this.data.slice(0,1).map((row, i) => {
                           return <PaperEngine {...this.stylePaper(row, i, deepOrange300, '#455a64')}  svg={ <Code/> }></PaperEngine>
                     })}
                     {
                        this.data.slice(1,2).map((row, i) => {
                              return <PaperEngine {...this.stylePaper(row, i, '#455a64')}  svg={ <Code/> }></PaperEngine>
                     })}
                     {
                     this.data.slice(0,1).map((row, i) => {
                           return <PaperEngine {...this.stylePaper(row, i, deepOrange300, '#455a64')}  svg={ <Code/> }></PaperEngine>
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
