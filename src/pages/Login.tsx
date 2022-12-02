import useAuth from "../hooks/useAuth";
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "../wrappers/GlobalContext";
import { User } from "oidc-client";

function Login() {
    let [searchParams] = useSearchParams();
    const location = useLocation();
    const { setCurrentUser } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    const { getUser } = useAuth();

    const generateUserFromParams = () => {
        const user = {
            profile: {
                sid: Date.now().toString(),
                sub: searchParams.get("userId"),
                email: searchParams.get("email"),
                given_name: searchParams.get("name"),
            }
        } as User;

        localStorage.setItem("user", JSON.stringify(user));

        setCurrentUser(user)
        navigate("/");
    }

    const generateUserFromLocalStorage = () => {
        const user = JSON.parse(localStorage.getItem("user") || "") as User;
        setCurrentUser(user)
        navigate("/");
    }

    const loadUserInfo = async () => {
        const user = await getUser();
        if (user) {
            setCurrentUser(user)
            navigate("/")
        }
    }

    useEffect(() => {
        if (location.hash.includes("error")) {
            navigate("/fail")
        } else if (process.env.REACT_APP_ALLOW_LOGIN
            && process.env.REACT_APP_ALLOW_LOGIN === "true"
            && searchParams.get("noauth")
        ) {
            generateUserFromParams();
        } else if (localStorage.getItem("user")) {
            generateUserFromLocalStorage();
        } else {
            loadUserInfo();
        }
    }, [])
    return (<></>);
}

export default Login;
