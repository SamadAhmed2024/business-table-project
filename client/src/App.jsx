import React, {Fragment} from 'react';
import ProductList from "./pages/Product-List.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProductList/>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default App;