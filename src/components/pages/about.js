import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import PaperEngine from "../automation/paperEngine"
import UMassAmherst from "../img/UMassAmherst_seal_black.svg"
import BikeCoop from "../img/bikeCoop.jpg"
import {grey900, grey500} from 'material-ui/styles/colors';


class PricesPage extends React.Component{

   datastore = () => {
      const array = [
         {
            cardHeaderTitle:<p>UMass Bike Coop<sup></sup></p>,
            zDepth:5,
            url:undefined,
            dialogTitle:
            <div>Who We Are
               <p style={{fontSize:12, marginTop:-15, marginBottom:-10}}>
                  UMass Bike <sup>coop.</sup> est. 1970's.<br/>
               </p>
            </div>,
            dialogBody:
            <p style={{marginTop:0}}>
            Curiosity is love. It's ignorance's nemesis. We should all be so lucky to have a playground for our imaginations. — Farrell, C.
            </p>,
         },
         {
            cardHeaderTitle:<p>the Product <sup>co.</sup></p>,
            zDepth:5,
            url:undefined,
            dialogTitle:
            <div>Developer's Note
               <p style={{fontSize:12, marginTop:-15, marginBottom:-10}}>
                  the Product <sup>co.</sup> est. 2015.<br/>
               </p>
            </div>,
            dialogBody:
            <p style={{marginTop:0}}>
            the Product co. is built upon our unwavering belief of curiosity and design,
            both of which we believe are inextricably bound. Keeping these truths at bay, we will tirelessly seek
            to explore the avenues of code and algorithms through the elemental principles of design.
            </p>,
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
                        Bike Coop
                        <div style={{fontFamily: 'Times', fontSize:12, color:grey500 }}>
                           A Publication of the Product <sup>co. </sup>
                        <span style={{fontSize:9}}>EST 2o15.</span>
                        </div>
                        <br/>
                     </h2>
                     {
                     [this.data[0]].map((row, i) => {
                           return <PaperEngine {...this.stylePaper(row, i, '#ffffff', '#000000')} src={ BikeCoop }></PaperEngine>
                     })}
                     {
                     [this.data[1]].map((row, i) => {
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


export default withWidth()(PricesPage);
