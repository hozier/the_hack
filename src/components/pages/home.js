import React from 'react'
import Avatar from 'material-ui/Avatar';
import {amber400, pink300,deepOrange900} from 'material-ui/styles/colors';
import MastHead from 'material-ui/svg-icons/maps/directions-bike';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import {Link} from 'react-router';
import Event from 'material-ui/svg-icons/notification/event-available';
import Payment from 'material-ui/svg-icons/maps/local-grocery-store';
import Location from 'material-ui/svg-icons/maps/pin-drop';
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
         introBlurb:<span></span>
   };
})()

datastore = (() => {
   return [
      { link:'prices', icon:<Payment/>, bg:'#00796B', fg:amber400, snackMsg:'Prices' },
      { link:'events', icon:<Event/>, bg:pink300, fg:'#00796B', snackMsg:'Events' },
      { link:'about', icon:<Location/>, bg:undefined, fg:deepOrange900, snackMsg:'Location' }
   ]
})()

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
            <p style={{marginTop: -50, fontWeight: 'normal', fontSize:74, fontFamily: 'Georgia', letterSpacing: -7.5}}>  Bike Coop</p>
            <p style={{fontFamily: 'Georgia', letterSpacing: 6, marginTop: -82.5}}>@UMassAmherst</p>
            <Link to={"/prices/"} style={{ textDecoration: 'none' }} >
               <RaisedButton label="Explore"
                  style={{marginBottom:40}}/>
            </Link>

         </div>


         <Playground payload={
               <div style={{textAlign: 'center'}}>
                  {
                     this.datastore.map((row, i) =>{
                        return(
                           <Link key={i} to={`/${row.link}/`} style={{ textDecoration: 'none' }} >
                              <CircleEngine {...this.circleProps(row.icon, row.bg, row.fg, row.snackMsg)} />
                           </Link>
                        )
                     })
                  }
               </div>
            }

            maxWidth={700}
            />
      </div>
   )
}
}

export default withWidth()(Homepage);
