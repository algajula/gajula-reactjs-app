import { useMsal } from "@azure/msal-react";

function MsalLogout() {
    const { instance } = useMsal();

    const handleLogout = async () => {
        // Clear local storage or session storage if needed
        localStorage.clear();
        sessionStorage.clear();

        // Perform MSAL logout
        await instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
    };

    return ( <button onClick={handleLogout}>Logout</button> );
}

export default MsalLogout;