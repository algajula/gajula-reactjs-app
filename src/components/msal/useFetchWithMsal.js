import { useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

export const useFetchWithMsal = () => {
    const { instance, accounts } = useMsal();
    const account = accounts[0];
    const tokenRequest = {
        scopes: ["User.Read"]
    };

    const FetchCustomeHttpGET = async (apiEndpoint, tokenRequest) => {
        try {
            // First, try to acquire the token silently from the cache
            const response = await instance.acquireTokenSilent({
                ...tokenRequest,
                account: account
            });
            const accessToken = response.accessToken;
            // console.log('accessToken---------',accessToken);

            // Use the acquired token to make the API call
            const headers = new Headers();
            const bearer = `Bearer ${accessToken}`;
            headers.append("Authorization", bearer);
            headers.append("Content-Type", "image/jpeg");

            const options = {
                method: "GET",
                headers: headers
            };
            const res = await fetch(apiEndpoint, options);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);

            return imageObjectURL;

        } catch (error) {
            return null;

        }
    };

    return { FetchCustomeHttpGET };
};