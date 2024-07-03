import { useSelector } from "react-redux"
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { selectLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

const AppBar = () => {
    const isLoggedIn = useSelector(selectLoggedIn);
    return (
        <header className={css.header}>
            <div className={css.div}>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
    )
}

export default AppBar;