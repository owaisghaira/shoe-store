import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Screens/Home'
import Product from '../Screens/Product'
import ProductDetail from '../Screens/ProductDetail'

function AppRoutes() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/product/:id' component={ProductDetail} />
            {/* <Route exact path='*' component={()=><h3>404 Not Found</h3>} /> */}
        </Router>
    )
}

export default AppRoutes;
