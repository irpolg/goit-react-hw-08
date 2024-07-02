import { useDispatch, useSelector } from "react-redux"
import { selectError, selectIsLoading } from "../redux/contacts/selectors"
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from "../components/ContactList/ContactList";


const ContactsPage = () => {
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
  return (
      <>
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
          <ContactForm />
          <SearchBox />
          <ContactList/>
      </>
  )
}

export default ContactsPage 
