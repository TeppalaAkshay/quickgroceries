import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import Logo from "../Logo";
import Favorites from "../Favorites";
import Cart from "../Cart";
import Login from "../Login";
import Search from "../Search";
import '../HeadNavCSS/Logo.css';
import '../HeadNavCSS/Header.css';





function HeaderNav(){
    const navigate = useNavigate()

    return(
        
        <div >
            <nav className="nav header">
                <div >
                <text onClick={()=> navigate('/')}><p  className="logo">Quick Groceries</p></text>
                </div>
                <Search className= "search"/>
                
                <div className="secondHeadercomp">
                <button onClick={()=> navigate('/favorites')}><img src="favorite.png" alt="Favorite" className="image"/></button>
                <button onClick={()=> navigate('/cart')}><img src="cart.png" alt="Cart" className="image"/></button>
                <button onClick={()=> navigate('/login')}><img src="login.png" alt="Login" className="imagelogin"/></button>
                </div>
            </nav>
            <Routes>
                <Route path="/" exact element={<Logo/>}/>
                <Route path="/favorites" exact element={<Favorites/>}/>
                <Route path="/cart" exact element={<Cart/>}/>
                <Route path="/login" exact element={<Login/>}/>
            </Routes>

        </div>
        

    );
}
export default HeaderNav;