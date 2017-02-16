import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import Academic from 'material-ui/svg-icons/action/description';
import Collab from 'material-ui/svg-icons/action/dashboard';
import Code from 'material-ui/svg-icons/action/code';
import PaperEngine from "../automation/paperEngine"
import Items from 'material-ui/svg-icons/image/style';
import Labor from 'material-ui/svg-icons/action/build';
import Misc from 'material-ui/svg-icons/action/settings';


class PricesPage extends React.Component{

   datastore = () => {
      const base = '$10.00'
      const array = [
         {
            cardHeaderTitle:"Tire",
            zDepth:1,
            price:`${base}`
         },
         {
            cardHeaderTitle:"Tube",
            zDepth:2,
            price:`${base}`
         },
         {
            cardHeaderTitle:"Chain",
            zDepth:5,
            price:`${base}`
         },
         {
            cardHeaderTitle:"Flat Fix",
            zDepth:3,
            price:`${base}`
         },
         {
            cardHeaderTitle:"Tune-Up",
            zDepth:4,
            price:`${base}`
         },
         {
            cardHeaderTitle:"Helmet",
            zDepth:1,
            price:`${base}`
         },
         {
            cardHeaderTitle:"Bar Tape",
            zDepth:1,
            price:`${base}`
         }
      ]
      return array
   }

   data = this.datastore()

   render(){
      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Prices | Items & Accessories</h2>{
                        this.data.slice(0,0+2 +1).concat(this.data.slice(7)).map((row, i) => {
                              return <PaperEngine key={i} collection={[row]} svg={ <Items/> }></PaperEngine>
                        })}

                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Prices | Labor</h2>{
                        this.data.slice(3,3+1 +1).map((row, i) => {
                              return <PaperEngine key={i} collection={[row]} svg={ <Labor/> }></PaperEngine>
                        })}
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Prices | Misc.</h2>{
                        this.data.slice(5, 5+1 +1).map((row, i) => {
                              return <PaperEngine key={i} collection={[row]} svg={ <Misc/> }></PaperEngine>
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
