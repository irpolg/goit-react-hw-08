import { Route, Routes } from "react-router-dom";
import AppBar from '../AppBar/AppBar';
import { Suspense, lazy } from "react";
import AuthNav from "../AuthNav/AuthNav";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));

const App = () => {
    return (
        <div>
            <AppBar/>
            <Suspense fallback={null}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='auth' element={<AuthNav />}>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegistrationPage />} />
                    </Route>
                    <Route path='/contacts' element={<ContactsPage />} />
                    <Route path='*' element={<div>404</div>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;





// import css from './App.module.css';
// import ContactList from '../ContactList/ContactList';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import Loader from '../Loader/Loader';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import { selectIsLoading, selectError } from '../../redux/contactsSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from '../../redux/contactsOps';
// import { useEffect } from 'react';

// // export default function App() {
// const App = () => {
//     const dispatch = useDispatch();
//     const isLoading = useSelector(selectIsLoading);
//     const error = useSelector(selectError);
    
//     useEffect(() => {
//         dispatch(fetchContacts());
//         }, [dispatch]);
    
//     return (
//     <div className={css.container}>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm />
//         <SearchBox />
//         {isLoading && <Loader />}
//         {error && <ErrorMessage />}
//         <ContactList/>
//     </div>
//     );
// };

// export default App;
