import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FormPage from './components/FormPage';
import { Routes, Route } from 'react-router-dom';
import Plan from './components/Plan';
import SignIn from './components/SignIn';

const App = () => {


    return (
        <>
        <Header />
            <div>
                <Routes>
                    <Route exact path="/" element={<SignIn/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/categories" element={<Categories/>} />
                    <Route path="/form" element={<FormPage/>} />
                    <Route path="/plans" element={< Plan/>} />
                </Routes>
            </div>
        <Footer />
        </>


    );
}


export default App;
