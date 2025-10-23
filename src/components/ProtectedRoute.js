import React from 'react';
import { useIsAuthenticated } from '@azure/msal-react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const isAuthenticated = useIsAuthenticated();

    if (!isAuthenticated) {
        return (
        <div class="content" id="content">
            <div align="left">
                <p>Please Login</p>
            </div>
        </div>
        );
    }

    return children;
}

export default ProtectedRoute;