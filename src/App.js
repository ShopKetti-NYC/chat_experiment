import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Pages/Layout';
import Navigation from './Components/Navigation';
import Sidebar from './Components/Sidebar';
import Landingpage from './Pages/Landingpage'

export default function App() {
    return (
        <BrowserRouter>
        <Landingpage/>
        </BrowserRouter>
    )
}