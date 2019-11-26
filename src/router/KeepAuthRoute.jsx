import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Error401 from '@/pages/error/Error401';
import { keepAliveRoutes } from './routes';
import { connect } from 'react-redux';
import store from '@/store'
// import { bindActionCreators } from "redux";
import {actionCreators} from '@/store/user'


class KeepAuthRoute extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const {
            component: Component,
            Auth,
            tabsShow,
            authquery,
            ...rest
        } = this.props;
        let configKeepAlive = keepAliveRoutes.find(item => item.path === rest.path);
        configKeepAlive && (configKeepAlive = configKeepAlive.keepAlive)
        return (
            <div style={{ flex: 1 }}>
                <Route
                    {...rest}
                    cache={configKeepAlive ? 'root' : 'LinkCache'}
                    render={props => {
                        //Auth判断要不要登录， store.getState().user.mydata判断有没有个人信息
                        let Authqeurys = Auth ? store.getState().user.mydata ? true : false : true;
                        //判断要不要重新请求个人信息                      
                        if (Authqeurys && authquery) this.props.getmydata()
                        let component = Authqeurys ? <Component {...props} /> : <Error401 {...props} />;
                        // 页面滚动条滚动到顶部
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        return component;
                    }}
                />
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        mydata: state.user
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        getmydata() {
            dispatch(actionCreators.getmydata())
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(KeepAuthRoute);