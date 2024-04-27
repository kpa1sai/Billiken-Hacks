import React from 'react';
import Categories from './Categories';
import { Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage'

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'
//import logo from './logo.png'; // Ensure the logo image is available in the src folder

const App = () => {

    return (
        <>
        <Header />
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/categories" element={<Categories/>} />
                    <Route path="/form" element={<FormPage/>} />
                </Routes>
            </div>
        <Footer />
        </>


    );
}


export default App;
