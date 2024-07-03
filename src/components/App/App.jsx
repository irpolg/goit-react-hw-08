import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
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