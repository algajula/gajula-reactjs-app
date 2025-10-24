import React, { useEffect, useState } from 'react';
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { useFetchWithMsal } from './useFetchWithMsal';

const apiRequest = {
    scopes: ["User.Read"]
};

const UserProfilePhoto = () => {
    const { FetchCustomeHttpGET } = useFetchWithMsal();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            const apiEndpoint = "https://graph.microsoft.com/v1.0/me/photo/$value"; // Replace with your API endpoint
            const result = await FetchCustomeHttpGET(apiEndpoint);
            setData(result);
        };
        fetchProfileData();
    }, [FetchCustomeHttpGET]);

    if (!data) {
        return '';
    }

    return (
         <img src={data} alt="wind icon" style={{ width: 50, height: 50 }} />
    );
};

export default UserProfilePhoto;
