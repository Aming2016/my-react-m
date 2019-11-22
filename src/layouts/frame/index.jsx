import React, { PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import routes from '@/router/routes';
class PageFrame extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    goback =()=>{
       
    this.props.history.goBack()
    }
    render() {
        const {
            location
        } = this.props;
        let isrouter = routes.find(item => item.path === location.pathname);
        let isicon = (location.pathname==='/home'||location.pathname==='/mine')
        return (
            <div>
                {isrouter?<NavBar
                mode="light"
                icon={!isicon?<Icon type="left" />:''}
                onLeftClick={this.goback}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >{isrouter.titleName}</NavBar>:null}
            </div>
        );
    }
}

export default PageFrame;