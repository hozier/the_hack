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
                        titleCardHeader:"P. William Hozier",
                        subtitleCardHeader:"Janurary 22, 2017",

                        titleCardTitle:"Component-Driven Development",
                        subtitleCardTitle:"Thinking in ReactJS with NodeJS + Material Design",
                        imgSrc:'https://i.ytimg.com/vi/mFEoarLnnqM/maxresdefault.jpg',
                        CardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  }
               ]
         return array
         }

      data = this.datastore()

      render(){
         var cards = this.data.map((eachParam, i) => {
         return <Playground
                  key={i}
                  payload={
                     <div>
                        <h2 style={{fontWeight: '100', lineHeight: '50px' }}>An Engineer's Monologue</h2>
                        <Card>
                           <CardHeader
                              title={eachParam.titleCardHeader}
                              subtitle={eachParam.subtitleCardHeader}
                              avatar={Hozier}
                              />
                           <CardMedia
                              overlay={<CardTitle title={eachParam.titleCardTitle} subtitle={eachParam.subtitleCardTitle} />}
                              >
                              <img src={eachParam.imgSrc} />
                           </CardMedia>
                           <CardText>
                              {eachParam.CardText}
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
