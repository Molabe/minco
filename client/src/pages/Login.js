import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/login', { email, password });
            localStorage.setItem('token', data.token);
            alert('Prihlásenie úspešné');
        } catch (error) {
            alert('Chyba pri prihlásení');
        }
    };

    return (
        <div className="login">
            <h2>Prihlásenie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Heslo"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Prihlásiť sa</button>
            </form>
        </div>
    );
};

export default Login;
