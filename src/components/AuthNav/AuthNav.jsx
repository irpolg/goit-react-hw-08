import { Link } from "react-router-dom";
import css from './AuthNav.module.css'

const AuthNav = () => {
    return (
        <div className='flex'>
            <Link className={css.link} to='/login'>Log In</Link>
            <Link className={css.link} to='/register'>Register</Link>
        </div>
    )
}

export default AuthNav;

