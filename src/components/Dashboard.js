import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getFriends } from '../ducks/reducer';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    componentDidMount() { //action that pulls info from the store
        this.props.getUserInfo() //after connecting this function through the connect invocation, it becomes part of the props object
        this.props.getFriends()
    }

    render() {
        const user = this.props.user;
        let friends = 2
        return (
            <div>
                <nav className="nav">
                    <div>
                        <img alt="logo" />
                        <Link to='/'><img alt="home" /></Link>
                        <Link to='/search/1'><img alt="search" /></Link>
                    </div>
                    <div>
                        Test
                    </div>
                    <div>
                        Logout
                    </div>
                </nav>
                <div>
                    <div className="avatar">
                        
                    </div>
                    <div className="welcome"></div>
                </div>
                <div>
                    <h1>Recommended Friends</h1>
                    <div>Sorted by:<select></select></div>
                </div>
                {friends}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo, getFriends })(Dashboard) //connect connects the store to this component, whatever pieces of state or action builders that we need from the store/reducer need to be passed in to this invocation of connect