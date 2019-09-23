import React, { Component } from 'react';
import {Button} from 'reactstrap';

class channelChose extends Component {
    constructor(props){
        super(props);

        this.channel1 = this.channel1.bind(this);
    }

    channel1(){
        alert('me')
    }

    render() { 
        return ( 
            <div>
                <Button className="mt-2" onClick={this.channel1}>OZ Channel</Button>
            </div>
         );
    }
}
 
export default channelChose;