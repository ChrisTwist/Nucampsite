import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, logoutUser } from '../features/user/userSlice';
import LoginForm from '../features/user/LoginForm';

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    return (
        <header>
            <h1>Nucampsite</h1>
            {currentUser ? (
                <div>Welcome, {currentUser.username}! <button onClick={() => dispatch(logoutUser())}>Logout</button></div>
            ) : <LoginForm />}
        </header>
    );
};

export default Header;
