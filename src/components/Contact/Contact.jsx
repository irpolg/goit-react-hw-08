import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';


// export default function Contact({ contact }) {
export default function Contact({ data }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(data.id))
    }
    return (
    <div className={css.user}>
        <div className={css.info}>
            <p><FaUser />{data.name}</p>
            <p><FaPhoneAlt />{data.number}</p>
        </div>
        <button className={css.btn_delete}
              onClick = {handleDelete}>
              Delete
        </button>
    </div>
  );
}