import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import withWidth from 'material-ui/utils/withWidth';
import FlatButton from 'material-ui/FlatButton';
import Playground from "./playground"
import Hozier from "./img/csseuxui-128.jpg"
import Technologies from "./img/THxTPC_600-337.png"
import transitions from 'material-ui/styles/transitions';
import Paper from 'material-ui/Paper';


let array = [{
   titleCardHeader:"P. William Hozier",
   subtitleCardHeader:"Janurary 22, 2017",

   titleCardTitle:"Component-Driven Development",
   subtitleCardTitle:"Thinking in ReactJS with NodeJS + Material Design",
   imgSrc:'https://i.ytimg.com/vi/mFEoarLnnqM/maxresdefault.jpg',
   CardText:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
   Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
   Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
}]

const MonologuesPage = () => (

<div>

   <Playground
      payload={
         <div>
            <h2 style={{fontWeight: '100', lineHeight: '50px' }}>An Engineer's Monologue</h2>
            <Card>
               <CardHeader
                  title="P. William Hozier"
                  subtitle="Janurary 22, 2017"
                  avatar={Hozier}
                  />
               <CardMedia
                  overlay={<CardTitle title="Component-Driven Development" subtitle="Thinking in ReactJS with NodeJS + Material Design" />}
                  >
                  <img src={'https://i.ytimg.com/vi/mFEoarLnnqM/maxresdefault.jpg'} />
               </CardMedia>

               <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
               </CardText>
            </Card>
         </div>
      }
      maxWidth={900}
   />


</div>
);


export default withWidth()(MonologuesPage);
