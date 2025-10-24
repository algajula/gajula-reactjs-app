import React, { useEffect } from 'react';
import { InteractionStatus } from '@azure/msal-browser';
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { loginRequest } from "./msal/msalConfig";
import UserProfilePhoto from './msal/UserProfilePhoto';
import MsalLogout from './msal/MsalLogout';

function LoginComponent() {
      console.log('--- LOGIN Component ----')
      const { instance, accounts, inProgress } = useMsal();

      const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
          console.error(e);
        });
      };

      const handleLogout = () => {
        instance.logoutPopup(handleLogout).catch(e => {
          console.error(e);
        });
      };

      return (
            <div align="right">
              <AuthenticatedTemplate>
                  Welcome, {accounts[0]?.name}! <UserProfilePhoto />
                  <MsalLogout />
                </AuthenticatedTemplate>

                <UnauthenticatedTemplate>
                  You are not signed in.
                  <button onClick={handleLogin}>Login</button>
                </UnauthenticatedTemplate>
            </div>
      );
 }

 export default LoginComponent;