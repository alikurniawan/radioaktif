import React, { Component } from 'react';
import {Card, CardHeader} from 'reactstrap';

class channels extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Card>
                    <CardHeader><div>{this.props.nama}</div></CardHeader>
                </Card>
                
            </div>
         );
    }
}
 
export default channels;