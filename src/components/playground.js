import React from 'react'
import FullWidthSection from "./material-ui-internal-components/fullwidthsection.js"
import {grey200} from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';

class Playground extends React.Component {

   // overview: defines styles used locally only for this component
   styles = (() => {
      return {
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
            maxWidth: this.props.maxWidth,
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

   render(){
      return(
            <FullWidthSection style={this.styles.introbox}
               useContent={true}
               contentStyle={this.styles.content}
               className="home-purpose">
               {this.props.payload}
            </FullWidthSection>
      )
   }
}

export default Playground;
