import './Login.scss';

import React, { PureComponent } from 'react';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //delete localStorage.userid;
        const userid = localStorage.getItem("userid");
        if (userid != 'undefined' && userid != null) {
            console.log(`Userid: ${userid}`)
        } else {
            const obj = {
                "user": {
                    "email": "test12@test.ru",
                    "password": "111111"
                }
            };
            fetch('https://floating-woodland-16538.herokuapp.com/api/v1/signin', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then(res => {
                    localStorage.userid = res.id;
                    console.log('Signin ' + localStorage.getItem("userid"));
                });
        }
    }

    render() {
        return (
            <div className="login">Login</div>
        );
    }
}

export default Login;