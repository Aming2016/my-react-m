import React, {Component} from 'react';
import {Link} from 'react-router-dom'
// import config from '@/commons/config-hoc';
import styleCss from './style.scss';
// @config({
//     router: true,
//     keepAlive: false,
// })
export default class Error404 extends Component {
    state = {
        time: 9,
    };

    handleGoBack = () => {
        this.props.history.goBack();
    };

    componentDidMount() {
        this.bodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        if (this.props.history.length >= 2) {
            this.sI = setInterval(() => {
                const time = this.state.time - 1;

                if(time===0) clearInterval(this.sI)
                if (time === 0) this.handleGoBack();
                
                this.setState({time});
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.sI);
        document.body.style.overflow = this.bodyOverflow;
    }

    render() {
        const {history} = this.props;
        const {time} = this.state;
        return (
            <div className={styleCss.errorbox}>
                <div className={styleCss.container}>
                    <div className={styleCss.header}>
                        <h3>页面不存在</h3>
                    </div>
                    <div className={styleCss.aclass}>
                        跳转到<Link to="/"> 首页 </Link>
                        {history.length >= 2 ? <div>或者返回 <span onClick={this.handleGoBack}>上一步（{time}）</span></div> : null}
                    </div>
                </div>
            </div>
        );
    }
}
