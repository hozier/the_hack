import React from 'react';
import Avatar from 'material-ui/Avatar';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "./playground"
import Hozier from "./img/csseuxui-128.jpg"
import Paper from 'material-ui/Paper';
import {lightGreen400, grey200} from 'material-ui/styles/colors';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import {Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class ProjectsPage extends React.Component{
   state = {
      open: false,
   };

   handleOpen = () => {
      this.setState({open: true});
   };

   handleClose = () => {
      this.setState({open: false});
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
            cardHeaderTitle:"RESTful APIs",
            zDepth:5,
            url:`${base}RESTful_API`
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
      const actions = [
         <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
            />,
         <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
            />,
      ];

      var cards = this.data.map((row, i) => {
         return  <Paper key={i} style={this.styles.papers} zDepth={row.zDepth} rounded={false}>
            <h3 style={{fontSize:18}}>{row.cardHeaderTitle}</h3>


            <div onTouchTap={this.handleOpen} style={{cursor: 'pointer', backgroundColor: '#455a64', height: 230, paddingTop: 40}}>
               <Avatar
                  icon={<Fingerprint />}
                  backgroundColor={'#455a64'}
                  color={'#ffffff'}
                  size={200}
                  />
            </div>
         </Paper>
      })

      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Projects</h2>
                     {cards}
                  </div>
               }
               maxWidth={1100}
               />

            <Dialog
               title="Dialog With Actions"
               actions={actions}
               modal={false}
               open={this.state.open}
               onRequestClose={this.handleClose}
               >
               The actions in this window were passed in as an array of React objects.
            </Dialog>
         </div>
      )
   }
};


export default withWidth()(ProjectsPage);
