import styles from './Header.module.css'

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';


export const Header=()=>{

    const { isAuthenticated, userName } = useContext(AuthContext);
    
    return(

        <header>
        <nav>
            <div>
              <Link to="/">Home</Link>
               <Link to="/recipies">Recipies</Link>
               <Link to="/about">About us</Link>
               <Link to="/contacts">Contacts</Link>
            </div>

            {!isAuthenticated && (
            <div>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
            </div>
            )}

            {isAuthenticated && (
            <div>            
                <p>Welcome <span>{userName}</span></p>
               <Link to="/create-recipie">Create recipie</Link>
               <Link to="/logout">Logout</Link>
            </div>
            )}
        </nav>


    </header>
    );
};