import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Hozier from "./img/csseuxui-128.jpg"

class MonologueEngine extends React.Component{

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

   monologueEngine = (collection) => {
      var cards = collection.map((row, i) => {
         return (
            <div>
               <Card key={i}
                  zDepth={this.state.zDepth}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}>
                  <CardHeader
                     title={row.cardHeaderTitle}
                     subtitle={row.cardHeaderSubtitle}
                     avatar={Hozier}
                     />

                  <CardMedia
                     style={{backgroundColor: row.backgroundColor}}
                     overlay={<CardTitle title={row.cardBodyTitle} subtitle={row.cardBodySubtitle} />}
                     >
                     <Avatar
                        icon={row.imgSrc}
                        backgroundColor={row.backgroundColor}
                        color={row.svgColor}
                        size={400}
                     />
                  </CardMedia>

                  <CardText>
                     {row.CardText}
                  </CardText>
               </Card>

               <br></br>
               <br></br>
            </div>
         )
      })

      return cards[0]
   }

   render(){
      return (
         this.monologueEngine(this.props.collection)
      )
   }
}

export default MonologueEngine
