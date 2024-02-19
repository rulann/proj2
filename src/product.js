import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './card';
import mustang from './res/mustang.jpg';
import porsche from './res/porsche.jpg';
import charger from './res/charger.jpg'
import dodge from './res/dodge.jpg'



import React from "react"

class Product extends React.Component {
    constructor(props){
        super(props);
        this.state ={}
    }

    render(){
        return(
            <div className='cards'>
                <Car source={mustang} color='#26303E' title="Mustang" desc="The Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, it is currently the longest-produced Ford car nameplate. "/>
                <Car source={porsche} color='#9D9CA4' title="Porsche" desc="The Porsche 911 is one of the greatest sports cars ever built and Porsche's most successful car. Since 1963, Porsche has produced more than 1 million 911s across seven generations."></Car>
                <Car source={dodge} color='red' title="Dodge challenger" desc="The Dodge Challenger is the name of three different generations of automobiles produced by American automobile manufacturer Dodge. the first use of the Challenger name by Dodge was in 1959"/>
                <Car source={charger} color='#0A377A' title="Dodge charger" desc="The Dodge Charger (1966), also known as Dodge Charger, is a mid-size automobile that was produced by Dodge from 1966 to 1978, and was based on the Chrysler B platform The Charger made its debut in mid-1966"></Car>
      </div>)
    }
}

export default Product;