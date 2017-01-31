import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import Academic from 'material-ui/svg-icons/action/description';
import Collab from 'material-ui/svg-icons/action/dashboard';
import Code from 'material-ui/svg-icons/action/code';
import PaperEngine from "../automation/paperEngine"
import UMassAmherst from "../img/UMassAmherst_seal_black.svg"
import {redA200, deepOrange300, grey900} from 'material-ui/styles/colors';


class ProjectsPage extends React.Component{

   datastore = () => {
      const base = 'https://github.com/hozier/'
      const array = [
         {
            cardHeaderTitle:"Author, Founder",
            zDepth:1,
            url:undefined,
            dialogTitle:'Hozier, P. William, Author',
            dialogBody:`the Product co. My attraction to design is what drives my interest of user
            interfaces, software engineering and the users experience. I am a recent
            graduate from the School of Computer Science at the University of Massachusetts Amherst.`,
         },
         {
            cardHeaderTitle:"Academia",
            zDepth:2,
            url:undefined,
            dialogTitle:'University of Massachusetts, Amherst',
            dialogBody:'',
         },
         {
            cardHeaderTitle:"Mission",
            zDepth:5,
            url:undefined,
            dialogTitle:'The Product Company, est 2015',
            dialogBody:`the Product co. is built upon our unwavering belief of curiosity and design,
            both of which we believe are inextricably bound. Keeping these truths at bay, we will tirelessly seek
            to explore the avenues of code and algorithms through the elemental principles of design.`,
         },
      ]
      return array
   }

   stylePaper = ((row, i, bg, fg)=>{
      return {
         margin:8,
         color: fg,
         background:bg,
         headerBackground:bg,
         key:i,
         collection:[row],
      }
   })

   data = this.datastore()

   render(){
      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{color: grey900, fontWeight: '100', lineHeight: '25px' }}>
                        / the_hack >
                        <span style={{fontFamily: 'Times', fontSize:16}}>
                           <hr/>
                           the Product <sup>co. </sup>
                           <span style={{fontSize:12}}>EST 2o15.</span>
                        </span>
                        <br/>
                     </h2>
                     {
                     this.data.slice(0,1).map((row, i) => {
                           return <PaperEngine {...this.stylePaper(row, i, grey900, '#ffffff')} src={ 'http://www.scottishprovidentbuilding.co.uk/images/quill.svg?crc=166794421' }></PaperEngine>
                     })}
                     {
                        this.data.slice(1,2).map((row, i) => {
                              return <PaperEngine {...this.stylePaper(row, i, '#455a64', '#ffffff')}  src={UMassAmherst }></PaperEngine>
                     })}
                     {
                     this.data.slice(2,3).map((row, i) => {
                           return <PaperEngine {...this.stylePaper(row, i, grey900, '#ffffff')}  src={ 'https://www.thinkava.com/assets/images/map.svg' }></PaperEngine>
                     })}

                  </div>
               }
               maxWidth={1100}

               />
         </div>
      )
   }
};


export default withWidth()(ProjectsPage);
