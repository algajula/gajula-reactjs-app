import { Configuration, PublicClientApplication, InteractionRequiredAuthError   } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "5d0892a6-423c-4eef-a56d-42d93f613898", // Replace with your Azure AD App Client ID
    authority: "https://login.microsoftonline.com/3f09ff37-65ad-430a-9128-bf6ddb5a9c86", // Replace with your tenant ID or "common"
    redirectUri: "http://localhost:3000", // Your application's redirect URI
  },
  cache: {
    cacheLocation: "sessionStorage", // or "localStorage"
    storeAuthStateInCookie: false,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
  scopes: ["User.Read"], // Scopes your application needs
};

export const handleLogout = async () => {
    // Clear local storage or session storage if needed
    localStorage.clear();
    sessionStorage.clear();
};