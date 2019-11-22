import React, { PureComponent } from 'react';
import {Route} from 'react-router-dom';
import Error401 from '@/pages/error/Error401';
import {keepAliveRoutes} from './routes';
class KeepAuthRoute extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {
            component: Component,
            noAuth,
            tabsShow,
            ...rest
        } = this.props;
        console.log(this.props)
        return ( 
            <Route
                {...this.props}
                cache
                render={props => {
                    let configKeepAlive = keepAliveRoutes.find(item => item.path === rest.path);
                    configKeepAlive&&(configKeepAlive=configKeepAlive.keepAlive)
                    let component = noAuth ? <Component {...props}/> : <Error401 {...props}/>;
                    console.log(configKeepAlive)
                    // 由KeepPage组件进行页面渲染和切换，这里不需要进行页面渲染
                    // if (!configKeepAlive) return null;

                    // 页面滚动条滚动到顶部
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    return component;
                }}
            />
         );
    }
}
 
export default KeepAuthRoute;
