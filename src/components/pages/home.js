import React from 'react'
import Avatar from 'material-ui/Avatar';
import {lime500, pink300} from 'material-ui/styles/colors';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth from 'material-ui/utils/withWidth';
import Hozier from "../img/csseuxui-128.jpg"
import Playground from "../utility/playground"
import {Link} from 'react-router';

class Homepage extends React.Component {
   // overview: defines styles used locally only for this component
   styles = (() => {
      return {
         mastheadBox:{
            background:lime500,
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
         'imagination', 'discovery', 'algorithms']
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
            <div style={this.styles.mastheadBox}>
               <Avatar
                  icon={<Fingerprint />}
                  backgroundColor={lime500}
                  color={'#455a64'}
                  size={300}
                  />
               <h1>  / the_hack > </h1>
               <p>An Anthology of Thoughts Sewn Together by </p>
               <p style={{letterSpacing: 4}}><b>#{this.state.tags[0]}</b></p><br/>
               <Link to={"/monologues/"} style={{ textDecoration: 'none' }} >
                  <RaisedButton label="Explore"
                     style={{marginBottom:40}}/>
               </Link>

            </div>


            <Playground payload={
                  <div>
                     <Avatar
                        src={Hozier}
                        size={100}
                        style={{marginRight:20, marginBottom:-5}}
                        />
                     {this.styles.introBlurb}
                  </div>
               }

               maxWidth={700}
            />
         </div>
      )
   }
}

export default withWidth()(Homepage);
