import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const userInfo = { user };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;