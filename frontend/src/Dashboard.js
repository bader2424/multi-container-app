import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setUsers(res.data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {users.map(u => <li key={u._id}>{u.username}</li>)}
      </ul>
    </div>
  );
}
