import { useSelector } from "react-redux"
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { selectLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
    const isLoggedIn = useSelector(selectLoggedIn);
    return (
        <div className='flex js-sb'>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
    )
}

export default AppBar;