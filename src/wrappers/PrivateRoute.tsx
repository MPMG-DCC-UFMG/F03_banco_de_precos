import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }: any) {

    const { isAuthenticated, signinRedirect, logout } = useAuth();

    if (localStorage.getItem("user")) {
        return children;
    } else if (isAuthenticated()) {
        return children;
    } else {
        signinRedirect();
        return <div>Redirecionando para login...</div>
    }
}

export default PrivateRoute;
