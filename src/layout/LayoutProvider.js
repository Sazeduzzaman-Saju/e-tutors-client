import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const LayoutProvider = () => {
    const [darkMode, setDarkMode] = useState()
    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });
    return (

        <ThemeProvider theme={darkTheme}>
            <CssBaseline>
                <Header check={darkMode} change={() => setDarkMode(!darkMode)} />
                <Outlet></Outlet>
                <Footer />
            </CssBaseline>
        </ThemeProvider>
    );
};

export default LayoutProvider;