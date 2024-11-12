import React from "react";
import Search from "./Header/Search";
import HeaderNav from './Header/HeaderNav/HeaderNav';
import { BrowserRouter as Router } from 'react-router-dom';

function Home(){
    return(
        <div>
           <header >
                <Router><HeaderNav/></Router>
                
            </header>
        </div>
    );
}
export default Home;