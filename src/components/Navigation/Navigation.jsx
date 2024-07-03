import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
    const isLoggedIn = useSelector(selectLoggedIn)

    return (
        <nav>
            <ul className={css.ulHome}>
                <li>
                    <Link className={css.link} to='/'>Home</Link>
                </li>
                {isLoggedIn && (
                    <li>
                        <Link className={css.link} to='/contacts'>Contacts</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default Navigation;

