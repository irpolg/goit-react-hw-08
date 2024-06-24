import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { selectIsLoading, selectError } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { useEffect } from 'react';

// export default function App() {
const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    useEffect(() => {
        dispatch(fetchContacts());
        }, [dispatch]);
    
    return (
    <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        <ContactList/>
    </div>
    );
};

export default App;
