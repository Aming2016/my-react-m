import React, { PureComponent } from 'react';
import styleCss from './index.scss';
class Mine extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={styleCss.minebox}>Mine</div>
         );
    }
}

export default Mine