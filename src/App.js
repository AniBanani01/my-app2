import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { RecipieProvider } from './contexts/RecipieContext';

import './reset.css'
import './App.css';

import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Recipies } from './components/Recipies/Recipies';
import { Register } from './components/Register/Register';
import {Logout} from './components/Logout/Logout'
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contacts } from './components/Contacts/Contacts';
import { Edit } from './components/Edit/Edit';



function App() {

    return (

        <AuthProvider>
            <RecipieProvider>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/about' element={<AboutUs />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-recipie' element={<Create />} />
                        <Route path='/recipies' element={<Recipies />} />
                        <Route path='/recipies/:recipieId' element={<Details />} />
                        <Route path='/recipies/:recipieId/edit' element={<Edit />} />

                    </Routes>
                </main>

                <Footer />
            </RecipieProvider>
        </AuthProvider>
    );
}

export default App;
