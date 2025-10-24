import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useNavigate } from 'react-router-dom';
import UserProfilePhoto from './msal/UserProfilePhoto';
import { loginRequest } from "./msal/msalConfig";

function LoginLogoutComponent() {
    const navigate = useNavigate();
    const { instance, accounts } = useMsal();

    const handleLogout = async () => {
        // Clear local storage or session storage if needed
        localStorage.clear();
        sessionStorage.clear();
        localStorage.removeItem('authToken');
        navigate('/home');
    };

    const handleLogin = () => {
       instance.loginPopup(loginRequest).catch(e => {
          console.error(e);
       });
    };

    return (
        <div>
            <UnauthenticatedTemplate>
                You are not signed in.
                <button onClick={handleLogin}>Login</button>
            </UnauthenticatedTemplate>

            <AuthenticatedTemplate>
                <div align="right">
                  Welcome, {accounts[0]?.name}!
                  <UserProfilePhoto />
                  <button onClick={handleLogout}>Logout</button>
                </div>
            </AuthenticatedTemplate>
       </div>
    );
}

export default LoginLogoutComponent;