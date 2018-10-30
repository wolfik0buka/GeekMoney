import { createAction } from 'redux-actions';

// Actions
export const userSignedIn= createAction('[User] signedIn');


export const userSigningIn = (data) => (dispatch) => {
    console.log('try login', data);
    const request = {
        user: data,
    };
    fetch('/api/signin', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request),
    }).then((res) => {
        return res.json();
    }).then((user) =>{
        console.log('input',user);
        dispatch(userSignedIn(user));
    }).catch((err) => console.log('error catch', err));
};
