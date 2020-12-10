import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

// specifies which component to render when user is Authenticated
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    // This hook accepts AuthContext from Auth
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                // If we have user, render <RouteComponent />, else route <Redirect />
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                        <Redirect to={"/login"} />
                    )
            }
        />
    );
};


export default PrivateRoute