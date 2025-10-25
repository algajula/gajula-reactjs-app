import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useNavigate } from 'react-router-dom';
import UserProfilePhoto from './msal/UserProfilePhoto';
import { loginRequest } from "./msal/msalConfig";

function LoginLogoutComponent() {
    const navigate = useNavigate();
    const { instance, accounts } = useMsal();

    const handleLogout = async () => {
        // Clear local storage or session storage if needed
        console.log('----- LOGOUT -----------');
        localStorage.clear();
        sessionStorage.clear();
        localStorage.removeItem('authToken');
        //navigate('/home');
        try {
          await instance.logoutRedirect({
            //postLogoutRedirectUri: "http://localhost:3000/", // Replace with your desired redirect URI
            onRedirectNavigate: (url) => {
                // Return false to stop navigation after local logout
                return false;
              },
          });
        } catch (error) {
          console.error("Error during logout:", error);
        }
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