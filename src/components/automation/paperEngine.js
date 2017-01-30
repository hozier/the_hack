import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {deepOrange300} from 'material-ui/styles/colors';

class PaperEngine extends React.Component{
   styles = (() => {
      return {
         papers:{
            height: 325,
            width: 300,
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#eeeeee'
         }
      };
   })()

   state = {
       zDepth: 1,
   };

   handleMouseEnter = () => {
     this.setState({
       zDepth: 5,
     });
   };

   handleMouseLeave = () => {
     this.setState({
       zDepth: 1,
     });
   };

   paperEngine = (collection, svg) => {
      var cards = collection.map((row, i) => {
         return(
            <Paper key={i} style={this.styles.papers} rounded={false}
                     zDepth={this.state.zDepth}
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}>
               <h3 style={{fontSize:18}}>{row.cardHeaderTitle}</h3>


               <a href={row.url}>
                  <div onTouchTap={this.handleOpen} style={{cursor: 'pointer', backgroundColor: '#455a64', height: 230, paddingTop: 40}}>
                     <Avatar
                        icon={svg}
                        backgroundColor={'#455a64'}
                        color={deepOrange300}
                        size={200}
                        />
                  </div>
               </a>
            </Paper>
         )
      })

      return cards[0]
   }

   render(){
      return (
         this.paperEngine(this.props.collection, this.props.svg)
      )
   }
}

export default PaperEngine
