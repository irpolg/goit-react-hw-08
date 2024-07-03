import {useDispatch, useSelector} from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);
    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div className={css.flex}>
            <p className={css.welcomeNameUser}>Welcome, { user.name}</p>
            <button className={css.btnLogOut} onClick={handleLogOut}>Logout</button>
            {/* <button >Logout</button> */}
        </div>
    )
}

export default UserMenu

        // <div className={css.flex}>