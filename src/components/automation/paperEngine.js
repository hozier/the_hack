import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {deepOrange300, grey900} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class PaperEngine extends React.Component{
   styles = (() => {
      return {
         papers:{
            height: 325,
            width: 300,
            margin: this.props.margin?(this.props.margin):(10),
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: this.props.headerBackground?(this.props.headerBackground):('#eeeeee'),
         }
      };
   })()

   handleOpen = () => {
      this.setState({open: true});
   };

   handleClose = () => {
      this.setState({open: false});
   };

   state = {
      zDepth: 1,
      open: false,
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

   dialogProperties = ((dialogTitle)=>{
      const actions = [
         <FlatButton
            style={{color:grey900}}
            label="Close"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
            />,
      ];
      return {
         title:dialogTitle,
         actions:actions,
         modal:false,
      }
   })

   paperEngine = (collection, svg) => {
      var backgroundColor = this.props.background?(this.props.background):('#455a64')
      var color = this.props.color?(this.props.color):(deepOrange300)
      var cards = collection.map((row, i) => {
         return(
            <span>
               <Paper key={i} style={this.styles.papers} rounded={false}
                  onTouchTap={this.handleOpen}
                  zDepth={this.state.zDepth}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}>
                  <h3 style={{fontSize:18, color:this.props.background?(color):(grey900)}}>{row.cardHeaderTitle}</h3>

                  <a href={row.url}>
                     <div onTouchTap={this.handleOpen} style={{cursor: 'pointer', backgroundColor: backgroundColor, height: 230, paddingTop: 40}}>
                        <Avatar
                           src={this.props.src && this.props.src}
                           icon={!this.props.src?(svg):(undefined) }
                           backgroundColor={backgroundColor}
                           color={color}
                           size={200}
                           />
                     </div>
                  </a>
               </Paper>

               {
                  !row.url &&
                  <Dialog
                     {...this.dialogProperties(row.dialogTitle)}
                     open={this.state.open}
                     onRequestClose={this.handleClose}
                     >
                     {row.dialogBody}
                  </Dialog>
               }
            </span>
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
