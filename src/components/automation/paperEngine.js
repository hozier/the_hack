import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {deepOrange300, grey900, pink100, teal700, amber400} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class PaperEngine extends React.Component{
   styles = (() => {
      return {
         papers:{
            height: this.props.H?(this.props.H):(259),
            width: this.props.W?(this.props.W):(225),
            margin: this.props.margin?(this.props.margin):(10),
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: this.props.headerBackground?(this.props.headerBackground):(pink100),
            fontFamily: 'Georgia'
         },
         depths:{
            depthStart: this.props.src?(5):(1),
            depthEnd: !this.props.src?(5):(1),
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
      zDepth: this.styles.depths.depthStart,
      open: false,
   };

   handleMouseEnter = () => {
      this.setState({
         zDepth: this.styles.depths.depthEnd,
      });
   };

   handleMouseLeave = () => {
      this.setState({
         zDepth: this.styles.depths.depthStart,
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
      var backgroundColor = this.props.background?(this.props.background):(teal700)
      var color = this.props.color?(this.props.color):(amber400)
      var cards = collection.map((row, i) => {
         return(
            <span>
               <Paper key={i} style={this.styles.papers} rounded={false}
                  onTouchTap={this.handleOpen}
                  zDepth={this.state.zDepth}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}>
                  <h3 style={{fontWeight: 'normal', fontSize:18, color:this.props.background?(color):(grey900)}}>{row.cardHeaderTitle}</h3>

                  <div onTouchTap={this.handleOpen} style={{cursor: 'pointer', backgroundColor: backgroundColor, height: 155, paddingTop: 40}}>
                     <Avatar
                        style={{marginTop:-55}}
                        src={this.props.src && this.props.src}
                        icon={!this.props.src?(svg):(undefined) }
                        backgroundColor={backgroundColor}
                        color={color}
                        size={200}
                        />
                     <br/><div style={{marginTop:-40, fontSize:16, color:'#ffffff'}}>{row.price}</div>
                  </div>
               </Paper>

               {
                  !row.price &&
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
