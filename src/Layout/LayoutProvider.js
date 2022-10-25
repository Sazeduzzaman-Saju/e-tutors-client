import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Shared/Header/Header';

const LayoutProvider = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutProvider;