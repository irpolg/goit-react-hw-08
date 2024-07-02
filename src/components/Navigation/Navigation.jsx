import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(selectLoggedIn)

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {isLoggedIn && (
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default Navigation;

