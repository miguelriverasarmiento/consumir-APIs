// Con el custom hook useFetch, error y abortController

/*
import { useFetch } from './useFetch';
import './App.css'

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="App">
      <h1>Fetch Pro</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App*/

/* --------------------------------------- */

// Con suspense

import { Suspense } from 'react';
import { fetchData } from './fetchData';
import './App.css'

const apiData = fetchData('https://jsonplaceholder.typicode.com/users')

function App() {

  const data = apiData.read();

  return (
    <div className="App">
      <h1>Fetch Pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default App
