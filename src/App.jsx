import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar.jsx';
import './index.css';






const App = () => {





    return(
        <>

        <Navbar> </Navbar>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to='/' />
        </Switch>

        </>
    )
}


export default App;