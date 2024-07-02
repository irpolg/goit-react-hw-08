import { Navigate, Route, Routes } from "react-router-dom";
// import AppBar from '../AppBar/AppBar';
import { lazy, useEffect } from "react";
// import AuthNav from "../AuthNav/AuthNav";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import Loader from "../Loader/Loader";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import { Layout } from "../Layout/Layout";

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {
dispatch(refreshUser())
}, [dispatch])
    return (
        isRefreshing ? <Loader/ > :
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/register' element={<RestrictedRoute
                        redirectTo='/contacts'
                        component={<RegistrationPage />} />} />
                     <Route path='/login' element={<RestrictedRoute
                        redirectTo='/contacts'
                        component={<LoginPage />} />} />
                    <Route path='/contacts' element={<PrivateRoute
                        redirectTo='/login'
                        component={<ContactsPage/>}
                    />} />
                    <Route path='*' element={<Navigate to="/" />} />    
                </Routes>
            </Layout>
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
