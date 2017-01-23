   import React from 'react';
   import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
   import withWidth from 'material-ui/utils/withWidth';
   import FlatButton from 'material-ui/FlatButton';
   import Playground from "./playground"
   import Hozier from "./img/csseuxui-128.jpg"
   import Technologies from "./img/THxTPC_600-337.png"
   import transitions from 'material-ui/styles/transitions';
   import Paper from 'material-ui/Paper';


   class MonologuesPage extends React.Component{

      datastore = () => {
         const array = [
                  {
                        cardHeaderTitle:"P. William Hozier",
                        cardHeaderSubtitle:"Janurary 22, 2017",
                        cardTitleTitle:"Component-Driven Development",
                        cardTitleSubtitle:"Thinking in ReactJS with NodeJS + Material Design",
                        imgSrc:'https://i.ytimg.com/vi/mFEoarLnnqM/maxresdefault.jpg',
                        CardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  },
                  {
                        cardHeaderTitle:"P. William Hozier",
                        cardHeaderSubtitle:"Janurary 22, 2017",
                        cardTitleTitle:"Component-Driven Development",
                        cardTitleSubtitle:"Thinking in ReactJS with NodeJS + Material Design",
                        imgSrc:'https://i.ytimg.com/vi/mFEoarLnnqM/maxresdefault.jpg',
                        CardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  }
               ]
         return array
         }

      data = this.datastore()

      render(){
         var cards = this.data.map((row, i) => {
         return <Playground
                  key={i}
                  payload={
                     <div>
                        {i == 0 && <h2 style={{fontWeight: '100', lineHeight: '50px' }}>An Engineer's Monologue</h2>}
                        <Card>
                           <CardHeader
                              title={row.cardHeaderTitle}
                              subtitle={row.cardHeaderSubtitle}
                              avatar={Hozier}
                              />
                           <CardMedia
                              overlay={<CardTitle title={row.cardTitleTitle} subtitle={row.cardTitleSubtitle} />}
                              >
                              <img src={row.imgSrc} />
                           </CardMedia>
                           <CardText>
                              {row.CardText}
                           </CardText>
                        </Card>
                     </div>
                  }
                  maxWidth={900}
               />
            }
         )

         return ( <div>{cards}</div> )
      }
   };


   export default withWidth()(MonologuesPage);
