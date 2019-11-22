import React, { PureComponent } from 'react';
import styleCss from './index.scss';
import { connect } from 'react-redux';
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}

    }
    componentDidMount(){
       console.log(typeof null==='object')
    }
    render() {
        return (
            <div className={styleCss.homebox}>
                home
                {this.props.mydata}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        // mydata: state.user.mydata
    }
}
const mapDispathToProps = (dispatch) => ({

    clickbtn(dispatch) {

    }

})
export default connect(mapStateToProps, mapDispathToProps)(Home);