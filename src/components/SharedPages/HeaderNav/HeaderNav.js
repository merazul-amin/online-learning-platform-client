import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const HeaderNav = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1>This is Navigation Bar</h1>
        </div>
    );
};

export default HeaderNav;