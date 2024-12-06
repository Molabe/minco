import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/register', { name, email, password });
            alert('Registrácia úspešná');
        } catch (error) {
            alert('Chyba pri registrácii');
        }
    };

    return (
        <div className="register">
            <h2>Registrácia</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Meno"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <button type="submit">Registrovať</button>
            </form>
        </div>
    );
};

export default Register;
