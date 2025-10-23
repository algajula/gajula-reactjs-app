import React, { useEffect } from 'react';
import { InteractionStatus } from '@azure/msal-browser';
import { useMsal } from "@azure/msal-react";
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
              {accounts.length > 0 ? (
                <div>
                  <p>Welcome, {accounts[0].name}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <button onClick={handleLogin}>Login</button>
              )}
            </div>
      );
 }

 export default LoginComponent;