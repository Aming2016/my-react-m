import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Error401 from '@/pages/error/Error401';
import { keepAliveRoutes } from './routes';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";


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
                        let component = !Auth ? <Component {...props} /> : <Error401 {...props} />;
                        this.props.clickbtn()
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
        clickbtn() {
            //    dispatch(actionCreators.getmydata())
        }
    }
}   
export default connect(mapStateToProps, mapDispathToProps)(KeepAuthRoute);