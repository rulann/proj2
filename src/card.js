import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import React from "react"

class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state ={}
    }

    render(){
        return(
            <div>
            <Card style={{ width: '380px', border:`2px solid ${this.props.color}`}} >
                <Card.Img variant="top" src={this.props.source}  height={'250px'}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.desc}
                    </Card.Text>
                </Card.Body>
            </Card>

            </div>
        )
    }
}

export default Cards;