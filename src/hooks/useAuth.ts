import AuthService from "../services/AuthService";

function useAuth() {
    const authService = new AuthService();

    const isAuthenticated = () => authService.isAuthenticated();
    const signinRedirect = () => authService.signinRedirect();
    const signinRedirectCallback = () => authService.signinRedirectCallback();
    const getUser = () => authService.getUser();
    const logout = () => authService.logout();

    return {
        isAuthenticated,
        signinRedirect,
        signinRedirectCallback,
        getUser,
        logout
    }
}

export default useAuth
