import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../ducks/reducer';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() { //action that pulls info from the store
        this.props.getUserInfo() //after connecting this function through the connect invocation, it becomes part of the props object
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <nav className="nav"></nav>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(Dashboard) //connect connects the store to this component, whatever pieces of state or action builders that we need from the store/reducer need to be passed in to this invocation of connect