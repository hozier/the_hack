import React from 'react'
import Avatar from 'material-ui/Avatar';
import {lightGreen400, pink300} from 'material-ui/styles/colors';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import RaisedButton from 'material-ui/RaisedButton';
import {grey200} from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';
import Hozier from "./img/csseuxui-128.jpg"
import withWidth from 'material-ui/utils/withWidth';
import FullWidthSection from "./material-ui-internal-components/fullwidthsection.js"

class Homepage extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         tags: ['code', 'curiosity', 'imagination', 'discovery'],
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

   render(){
      return(
         <div>
            <div style={styles.box}>
               <Avatar
                  icon={<Fingerprint />}
                  backgroundColor={lightGreen400}
                  color={'#ffffff'}
                  size={300}
                  />
               <h1>  / the_hack > </h1>


               <p>An Anthology of Thoughts Sewn Together by <b>#{this.state.tags[0]}</b></p>
               <RaisedButton label="Explore"
                  style={{marginBottom:40}}/>
            </div>


            <FullWidthSection style={styles.introbox}
               useContent={true}
               contentStyle={styles.content}
               contentType="p"
               className="home-purpose">
               <Avatar
                  src={Hozier}
                  size={100}
                  style={{marginRight:20, marginBottom:-5}}
                  />
               My attraction to design is what drives my interest of <span
               style={{color:pink300}}>user interfaces</span>, <span
               style={{color:pink300}}>software engineering</span> and <span
               style={{color:pink300}}>the users experience</span>. I am a recent graduate
               from the School of Computer Science at the University of Massachusetts
               Amherst.
            </FullWidthSection>
         </div>
      )
   }
}

// overview: defines styles used locally only for this component
let styles = (() => {
   return {
      box:{
         background:lightGreen400,
         margin: 0,
         right: 0,
         left: 'auto',
         textAlign: 'center',
      },
      introbox:{
         fontSize: 20,
         background:grey200,
         margin: 0,
         right: 0,
         bottom: 240,
         left: 'auto',

         textAlign: 'left',
         lineHeight: 5
      },
      content: {
         maxWidth: 700,
         padding: 0,
         margin: '0 auto',
         fontWeight: typography.fontWeightLight,
         fontSize: 20,
         lineHeight: '28px',
         paddingTop: 19,
         marginBottom: 13,
         letterSpacing: 0,
         color: typography.textDarkBlack,
      }
   };
})()

export default withWidth()(Homepage);
