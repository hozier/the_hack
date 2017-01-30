import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {deepOrange300, grey900} from 'material-ui/styles/colors';

class PaperEngine extends React.Component{
   styles = (() => {
      return {
         papers:{
            height: 325,
            width: 300,
            margin: this.props.margin?(this.props.margin):(10),
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: this.props.headerBackground?(this.props.headerBackground):('#eeeeee')
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
      var backgroundColor = this.props.background?(this.props.background):('#455a64')
      var color = this.props.color?(this.props.color):(deepOrange300)
      var cards = collection.map((row, i) => {
         return(
            <Paper key={i} style={this.styles.papers} rounded={false}
                     zDepth={this.state.zDepth}
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}>
               <h3 style={{fontSize:18, color:color}}>{row.cardHeaderTitle}</h3>


               <a href={row.url}>
                  <div onTouchTap={this.handleOpen} style={{cursor: 'pointer', backgroundColor: backgroundColor, height: 230, paddingTop: 40}}>
                     <Avatar
                        icon={svg}
                        backgroundColor={backgroundColor}
                        color={color}
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
