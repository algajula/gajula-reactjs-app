import { useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

export const GetMsalToken = () => {
    const { instance, accounts } = useMsal();
    const account = accounts[0];
    const tokenRequest = {
        scopes: ["User.Read"]
    };
    const FetchAcquireToken = async (tokenRequest) => {
        try {
            const response = await instance.acquireTokenSilent({
                ...tokenRequest,
                account: account
            });
            const accessToken = response.accessToken;
            return accessToken;
        } catch (error) {
            return "";
        }
    };
    return { FetchAcquireToken };
};