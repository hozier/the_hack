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

   pay = (value) => {
      const base = '.00'
      const d = '$'
      return `${d}${value}${base}`
   }

   datastore = () => {
      const base = '.00'
      const d = '$'
      const items = [
         { cardHeaderTitle:"Tube", price: this.pay(7) },
         { cardHeaderTitle:"Cables Housing",price: this.pay(20)},
         { cardHeaderTitle:"Front New Spoke", price: this.pay(25)},
         { cardHeaderTitle:"Rear New Spoke", price:  this.pay(30)},
         { cardHeaderTitle:"Tire", price:this.pay('30-70') },
         { cardHeaderTitle:"Bar Wrap", price: this.pay(15) },
      ]
      const repair = [
         { cardHeaderTitle:"Flat Fix", price: this.pay(15) },
         { cardHeaderTitle:"Basic Tune-Up", price: this.pay(50)},
         { cardHeaderTitle:"Brake Adjust", price: this.pay(15)},
         { cardHeaderTitle:"Gear Adjust",price: this.pay(15)},
         { cardHeaderTitle:"BB Adjust", price: this.pay(15)},
         { cardHeaderTitle:"Gear Install", price:`${this.pay('10-25')}`},
         { cardHeaderTitle:"Chain Install", price:this.pay(8)},
         { cardHeaderTitle:"Drivetrain Clean", price: this.pay(25)},
         { cardHeaderTitle:"Wheel True", price:this.pay(15)},
         { cardHeaderTitle:"Cassette/Freewheel Install", price: this.pay(8)},
         { cardHeaderTitle:"Headset Adjust", price:this.pay(6)},
         { cardHeaderTitle:"Back Fender Install", price:this.pay(20) },
      ]
      return {items:items, repair:repair}
   }

   data = this.datastore()

   render(){
      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Prices | Items & Accessories</h2>{
                        this.data.items.map((row, i) => {
                              return <PaperEngine key={i} collection={[row]} svg={ <Items/> }></PaperEngine>
                        })}

                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Prices | Labor</h2>{
                        this.data.repair.map((row, i) => {
                              return <PaperEngine key={i} collection={[row]} svg={ <Labor/> }></PaperEngine>
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
