import React, { Component } from 'react';
import './Line.css';

class Line extends Component{
    render() {
        return (
            <div>
                <hr style={{backgroundColor:'blue',height: this.props.height * 5,display:"flex",flexDirection:'row'}}  width={30} />
            </div>
        )
    }
}

export default Line;