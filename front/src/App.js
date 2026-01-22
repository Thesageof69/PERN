import { useState } from 'react';

const API = 'http://localhost:4000';

function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState(null);
  const [users, setUsers] = useState([]);

  async function handleRegister(e) {
    e.preventDefault();
    const res = await fetch(`${API}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname, lastname, email, password }),
      credentials: 'include',
    });
    const data = await res.json();
    alert(data.message || 'Registered');
  }

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch(`${API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include', 
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.message || 'Login failed');
      return;
    }
    alert('Login success');
  }

  async function loadProfile() {
    const res = await fetch(`${API}/profile`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await res.json();
    if (!res.ok) {
      alert('Not authenticated');
      return;
    }
    setProfile(data);
  }

  async function loadUsers() {
    const res = await fetch(`${API}/users`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.message || 'Failed to load users');
      return;
    }
    setUsers(data.users);
  }

  return (
    <div>
      <style jsx="true">{`
        body {
          font-family: Aerial, sans-serif;
          margin: 20px;
        }
        input {
          margin: 5px;
        }
        button {
          margin: 5px;
        }
        .register-btn {
          background-color: #59af4c;
          color: white;
          border: none;
          padding: 3px 10px;
          cursor: pointer;
        }
        .login-btn {
          background-color: #59af4c;
          color: white;
          border: none;
          padding: 3px 10px;
          cursor: pointer;
        }
        .btn {
          background-color: #f30800;
          color: white;
          border: none;
          padding: 3px 10px;
          cursor: pointer;
        }
      `}</style>


      <h1>USER REGISTERATION AND LOGIN</h1>

      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="First name" value={firstname} onChange={e => setFirstname(e.target.value)} />
        <input placeholder="Last name" value={lastname} onChange={e => setLastname(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className='register-btn'>Register</button>
      </form>

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className='login-btn'>Login</button>
      </form>

      <h2>Protected data</h2>
      <button onClick={loadProfile} className='btn'>Get Profile</button>
      <button onClick={loadUsers}className='btn'>Get Users</button>

      {profile && (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      )}

      {users.length > 0 && (
        <ul>
          {users.map(u => (
            <li key={u.id}>
              {u.FirstName} {u.LastName} ({u.Email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;