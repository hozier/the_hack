import React from 'react'
import Avatar from 'material-ui/Avatar';
import {amber400, pink300} from 'material-ui/styles/colors';
import MastHead from 'material-ui/svg-icons/maps/directions-bike';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth from 'material-ui/utils/withWidth';
import Hozier from "../img/csseuxui-128.jpg"
import Playground from "../utility/playground"
import {Link} from 'react-router';
import Event from 'material-ui/svg-icons/notification/event-available';
import Payment from 'material-ui/svg-icons/maps/local-grocery-store';
import CircleEngine from "../automation/circleEngine"


class Homepage extends React.Component {
   // overview: defines styles used locally only for this component
   styles = (() => {
      return {
         mastheadBox:{
            background:amber400,
            margin: 0,
            right: 0,
            left: 'auto',
            textAlign: 'center',
         },
         introBlurb:<span>My attraction to design is what drives my interest of <span
         style={{color:pink300}}>user interfaces</span>, <span
         style={{color:pink300}}>software engineering</span> and <span
         style={{color:pink300}}>the user's experience</span>. I am a recent graduate
         from the School of Computer Science at the University of Massachusetts
         Amherst and an IBM Software Engineer.</span>
   };
})()

constructor(props){
   super(props)
   this.state = {
      tags: ['design', 'solutions', 'code', 'curiosity',
      'imagination', 'discovery', 'algorithms'],
   }
}

cycleTags = () => {
   var temp = this.state.tags
   let el = temp.pop()
   let index = 0
   temp.splice(index, 0, el)
   this.setState({
      tags: temp
   });
}

tick() {
   this.cycleTags()
}

componentDidMount() {
   this.timerID = setInterval(
      () => this.tick(),
      400
   );
}

componentWillUnmount() {
   clearInterval(this.timerID);
}

circleProps = (a, b, f, s) => {
   return {
      avatarIcon:a,
      backgroundColor:b,
      foregroundColor:f,
      snackBarMessage:s
   }
}

render(){

   return(
      <div>
         <div style={this.styles.mastheadBox}>
            <Avatar
               icon={ <MastHead/> }
               backgroundColor={amber400}
               color={'#00796B'}
               size={300}
               />
            <h1>  Bike Coop </h1>
            <p>@UMassAmherst</p>
            <p style={{letterSpacing: 4}}><b>#{this.state.tags[0]}</b></p><br/>
            <Link to={"/monologues/"} style={{ textDecoration: 'none' }} >
               <RaisedButton label="Explore"
                  style={{marginBottom:40}}/>
            </Link>

         </div>


         <Playground payload={
               <div style={{textAlign: 'center'}}>
                  <CircleEngine {...this.circleProps(<Payment/>, '#00796B', amber400, 'Prices')} />
                  <CircleEngine {...this.circleProps(<Event/>, pink300, '#00796B', 'Events')} />
                  <CircleEngine {...this.circleProps(<MastHead/>, undefined, '#00796B', 'About')} />
               </div>
            }

            maxWidth={700}
            />
      </div>
   )
}
}

export default withWidth()(Homepage);
