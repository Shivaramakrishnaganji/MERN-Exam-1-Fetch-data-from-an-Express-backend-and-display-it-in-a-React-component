import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>User Directory</h1>
      
      {loading && <p>Loading users from backend...</p>}
      
      {error && <p className="error-message">Error fetching data: {error}</p>}
      
      {!loading && !error && (
        <UserList users={data} />
      )}
    </div>
  );
}

export default App;
