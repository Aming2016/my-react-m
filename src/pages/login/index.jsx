import React, { PureComponent } from 'react';
import styleCss from './index.scss';
class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
      
    }
    render() { 
        return ( 
            <div className={styleCss.loginbox}>Login</div>
         );
    }
}

export default Login