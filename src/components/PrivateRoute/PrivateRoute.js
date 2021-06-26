import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    let checkEmail = sessionStorage.getItem('signedIn');
    return (
        <Route
            {...rest}
            render={props =>
                !checkEmail ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: props.location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;