import React from 'react';
import Categories from './Categories';

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
