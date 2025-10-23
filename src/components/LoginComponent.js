import React, { useEffect } from 'react';
import { InteractionStatus } from '@azure/msal-browser';
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { loginRequest } from "./msal/msalConfig";

 function LoginComponent() {
      console.log('--- LOGIN Component ----')
      const { instance, accounts, inProgress } = useMsal();

      const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
          console.error(e);
        });
      };

      const handleLogout = () => {
        instance.logoutPopup().catch(e => {
          console.error(e);
        });
      };

      return (
            <div align="right">
              <AuthenticatedTemplate>
                  <p>Welcome, {accounts[0]?.name}!</p>
                  <button onClick={handleLogout}>Logout</button>
                </AuthenticatedTemplate>

                <UnauthenticatedTemplate>
                  <p>You are not signed in.</p>
                  <button onClick={handleLogin}>Login</button>
                </UnauthenticatedTemplate>
            </div>
      );
 }

 export default LoginComponent;