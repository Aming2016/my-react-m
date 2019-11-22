import React, {Component} from 'react';
import styleCss from './style.scss';

export default class Error401 extends Component {
    state = {
        time: 9,
    };

    handleGoBack = () => {
        this.props.history.goBack();
    };

    componentDidMount() {
        this.bodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        this.sI = setInterval(() => {
            const time = this.state.time - 1;
            if(time===0) clearInterval(this.sI)
            if (time === 0) this.props.history.replace('login');

            this.setState({time});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.sI);
        document.body.style.overflow = this.bodyOverflow;
    }

    render() {
        const {history} = this.props;
        const {time} = this.state;
        return (
            <div className={styleCss.errorboxone}>
                <div className={styleCss.container}>
                    <div className={styleCss.header}>
                        <img className={styleCss.imgbox} src="./401.jpg" alt=""/>
                        <h3>需要登录</h3>
                    </div>
                    <div className={styleCss.aclass}>
                        跳转到<span> 登录页面({time}) </span>
                        {history.length >= 2 ? <p>或者返回 <span onClick={this.handleGoBack}>上一步</span></p> : null}
                    </div>
                </div>
            </div>
        );
    }
}
