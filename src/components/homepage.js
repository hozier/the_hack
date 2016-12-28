import React from 'react'
import Avatar from 'material-ui/Avatar';
import {lightGreen400, pink300} from 'material-ui/styles/colors';
import AppBarIcon from "./appbaricon"
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import {getStyles} from "./styles"
import RaisedButton from 'material-ui/RaisedButton';
import Hozier from "./img/csseuxui-128.jpg"

const styles = getStyles()

class Homepage extends React.Component {
   render(){
      return(
         <div>
            <AppBarIcon></AppBarIcon>

            <div style={styles.box}>
               <Avatar
                  icon={<Fingerprint />}
                  backgroundColor={lightGreen400}
                  size={300}
               />
               <h1>  / the_hack > </h1>
               <p>An Anthology of Thoughts Stitched Together by #code</p>
               <RaisedButton label="Explore" style={{margin: 12}} />
            </div>

            <div style={styles.introbox}>
               <p>
               <Avatar
                  src={Hozier}
                  size={100}
                  style={{marginRight:20, marginBottom:-40}}
               />
               My attraction to design is what drives my interest of <span style =
               {{color:pink300}}>user interfaces</span>, <span style =
               {{color:pink300}}>software engineering</span> and <span style =
               {{color:pink300}}>the users experience</span>. I am a recent graduate
               from the School of Computer Science at the University of Massachusetts
               Amherst.
               </p>
            </div>
         </div>
      )
   }
}

export default Homepage
