import React from 'react';
import Avatar from 'material-ui/Avatar';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "./playground"
import Paper from 'material-ui/Paper';
import Academic from 'material-ui/svg-icons/action/description';
import Collab from 'material-ui/svg-icons/action/dashboard';
import Code from 'material-ui/svg-icons/action/code';

class ProjectsPage extends React.Component{
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

   state = {
       zDepth0: 1,
       zDepth1: 1,
       zDepth2: 1
   };

   handleMouseEnter0 = () => {
     this.setState({
       zDepth0: 5,
     });
   };

   handleMouseLeave0 = () => {
     this.setState({
       zDepth0: 1,
     });
   };

   handleMouseEnter1 = () => {
     this.setState({
       zDepth1: 5,
     });
   };

   handleMouseLeave1 = () => {
     this.setState({
       zDepth1: 1,
     });
   };

   handleMouseEnter2 = () => {
     this.setState({
       zDepth2: 5,
     });
   };

   handleMouseLeave2 = () => {
     this.setState({
       zDepth2: 1,
     });
   };


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
      ]
      return array
   }

   data = this.datastore()

   paperEngine = (collection, handleMouseEnter, handleMouseLeave, zDepth, svg) => {
      var cards = collection.map((row, i) => {
         return(
            <Paper key={i} style={this.styles.papers} rounded={false}
                     zDepth={zDepth}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
               <h3 style={{fontSize:18}}>{row.cardHeaderTitle}</h3>


               <a href={row.url}>
                  <div onTouchTap={this.handleOpen} style={{cursor: 'pointer', backgroundColor: '#455a64', height: 230, paddingTop: 40}}>
                     <Avatar
                        icon={svg}
                        backgroundColor={'#455a64'}
                        color={'#ffffff'}
                        size={200}
                        />
                  </div>
               </a>
            </Paper>
         )
      })

      return cards
   }

   render(){
      var cards = this.paperEngine(this.data, this.handleMouseEnter0, this.handleMouseLeave0, this.state.zDepth0, <Code></Code>)
      const base = 'https://github.com/hozier/'

      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Apps & Services</h2>
                     {cards}
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Academic</h2>
                        {
                           this.paperEngine([{
                              cardHeaderTitle:"Longest Repeated String",
                              zDepth:3,
                              url:`${base}Longest_repeated_substring`
                           },
                           {
                              cardHeaderTitle:"Operating Systems in C",
                              zDepth:4,
                              url:`${base}labs.cmpsci377`
                           }],
                           this.handleMouseEnter1, this.handleMouseLeave1, this.state.zDepth1, <Academic/>)
                        }
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects | Collaborative</h2>
                     {
                        this.paperEngine([ {
                           cardHeaderTitle:"DataDash by MBDTUI",
                           zDepth:1,
                           url:'https://github.com/mbdtui/DataDash'
                        }],
                        this.handleMouseEnter2, this.handleMouseLeave2, this.state.zDepth2, <Collab/>)
                     }
                  </div>
               }
               maxWidth={1100}
               />
         </div>
      )
   }
};


export default withWidth()(ProjectsPage);
