import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserSuccess } from './userSlice';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real app, you would fetch this from an API
        const mockUser = { id: 1, username: username };
        
        // Dispatch the action with the user object as the payload
        dispatch(loginUserSuccess(mockUser));
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
