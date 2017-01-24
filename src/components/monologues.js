import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import withWidth from 'material-ui/utils/withWidth';
import FlatButton from 'material-ui/FlatButton';
import Playground from "./playground"
import Hozier from "./img/csseuxui-128.jpg"
import Technologies from "./img/THxTPC_600-337.png"


class MonologuesPage extends React.Component{

   datastore = () => {
      const array = [
         {
            cardHeaderTitle:"P. William Hozier",
            cardHeaderSubtitle:"Janurary 22, 2017",
            cardBodyTitle:"Component-Driven Development",
            cardBodySubtitle:"Thinking in ReactJS with NodeJS + Material Design",
            imgSrc:'https://i.ytimg.com/vi/mFEoarLnnqM/maxresdefault.jpg',
            CardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
         },
         {
            cardHeaderTitle:"P. William Hozier",
            cardHeaderSubtitle:"Janurary 22, 2017",
            cardBodyTitle:"Component-Driven Development",
            cardBodySubtitle:"Thinking in ReactJS with NodeJS + Material Design",
            imgSrc:'https://i.ytimg.com/vi/mFEoarLnnqM/maxresdefault.jpg',
            CardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
         }
      ]
      return array
   }

   data = this.datastore()

   render(){
      var cards = this.data.map((row, i) => {
         return <div>
            <Card>
               <CardHeader
                  title={row.cardHeaderTitle}
                  subtitle={row.cardHeaderSubtitle}
                  avatar={Hozier}
                  />
               <CardMedia
                  overlay={<CardTitle title={row.cardBodyTitle} subtitle={row.cardBodySubtitle} />}
                  >
                  <img src={row.imgSrc} />
               </CardMedia>
               <CardText>
                  {row.CardText}
               </CardText>
            </Card>

            <br></br>
            <br></br>
         </div>
      }
   )

   return <Playground
      payload={
         <div>
            <h2 style={{fontWeight: '100', lineHeight: '50px' }}>An Engineer's Monologue</h2>
            {cards}
         </div>
      }
      maxWidth={900}
      />
}
};


export default withWidth()(MonologuesPage);
