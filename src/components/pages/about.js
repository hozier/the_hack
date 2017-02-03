import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import PaperEngine from "../automation/paperEngine"
import UMassAmherst from "../img/UMassAmherst_seal_black.svg"
import {grey900, grey500} from 'material-ui/styles/colors';


class ProjectsPage extends React.Component{

   datastore = () => {
      const array = [
         {
            cardHeaderTitle:"Author, Founder",
            zDepth:1,
            url:undefined,
            dialogTitle:`Author's Note`,
            dialogBody:`Curiosity is love. It's ignorance's nemesis. We should all be so lucky to have a playground for our imaginations” (Farrell, 2009).
            Questioning the flow, bits and pieces of data that collectively become the intricacies and vulnerabilities within computing
            is the ultimate springboard to smarter solutions. My transition from a love of literature and writing into writing lines of code seems almost intrinsic
            to some as a convergence of curiosity. As an author, I’ve encouraged curiousness in the face of uncertainty — believing it is fundamental
            to the writing process. Integral to the development of original solutions and design, curiosity is core to the Product co. — serving as a space
            where creativity and curiosity thrive. — Hozier, P. William `
         },
         {
            cardHeaderTitle:"Academia",
            zDepth:2,
            url:undefined,
            dialogTitle:'University of Massachusetts Amherst',
            dialogBody:'A special thanks to the brilliant minds of the College of Information and Computer Sciences | University of Massachusetts Amherst.',
         },
         {
            cardHeaderTitle:"Mission",
            zDepth:5,
            url:undefined,
            dialogTitle:'The Product Company, est. 2015',
            dialogBody:`the Product co. is built upon our unwavering belief of curiosity and design,
            both of which we believe are inextricably bound. Keeping these truths at bay, we will tirelessly seek
            to explore the avenues of code and algorithms through the elemental principles of design.`,
         },
      ]
      return array
   }

   stylePaper = ((row, i, bg, fg)=>{
      return {
         margin:10,
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
                     <h2 style={{color: grey900, fontWeight: '100', lineHeight: '22px', marginTop: 39}}>
                        / the_hack >
                        <div style={{fontFamily: 'Times', fontSize:12, color:grey500 }}>
                           A Publication of the Product <sup>co. </sup>
                        <span style={{fontSize:9}}>EST 2o15.</span>
                        </div>
                        <br/>
                     </h2>
                     {
                     [this.data[0]].map((row, i) => {
                           return <PaperEngine {...this.stylePaper(row, i, '#ffffff', '#000000')} src={ 'http://www.scottishprovidentbuilding.co.uk/images/quill.svg?crc=166794421' }></PaperEngine>
                     })}
                     {
                     [this.data[1]].map((row, i) => {
                              return <PaperEngine {...this.stylePaper(row, i, '#ffffff', '#000000')}  src={UMassAmherst }></PaperEngine>
                     })}
                     {
                     [this.data[2]].map((row, i) => {
                           return <PaperEngine {...this.stylePaper(row, i, '#ffffff', '#000000')}  src={ 'https://www.thinkava.com/assets/images/map.svg' }></PaperEngine>
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
