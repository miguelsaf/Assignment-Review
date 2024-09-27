import './pages.css';
import { useEffect, useRef, useState } from 'react';
import HomeAuthenticated from './HomeAuthenticated';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Handle Submit Called");
        navigate('/HomeAuthenticated')
    };
    
    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className='formControls'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className='formControls'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='formControls'>
                    <button className='button'>Login</button>
                    <a href="/"><h2>Home</h2></a>
                </div>
            </form>
        </div>
    )
}

export default Login