import React, {Component} from 'react';

export default class Home extends Component {
    render (){
        return(
            <div>
                <div>
                    <img/>
                    <h1></h1>
                    <a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a>
                </div>
            </div>
        )
    }
}