
import React, { Component } from 'react';
import Header from './components/header/Header';
import styles from "./App.module.css";
import { Link, Route,  BrowserRoute, Switch} from "react-router-dom";
import Navbar from './components/header/Navbar';
import Pages from './pages/Pages';
import Home from './components/mainpage/Home';





class App extends Component {
    render() {
        return (
         <>
    
   
       <Header />

       <Switch>
            <Route exact path='/' component={Pages} />
        </Switch>
   
         </>
        );
    }
}

export default App;