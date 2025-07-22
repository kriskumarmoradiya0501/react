import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello with Vite | Kriskumar...!</h1>
      <div>
        <p>React project setup instructions:</p>
        <ul>
          <li>To create a React app: <code>npx create-react-app 01basicreact</code></li>
          <li>To start the app: <code>npm run start</code></li>
          <li>To create a Vite app: <code>npm create vite@latest</code></li>
          <li>Check directories: <code>dir</code></li>
          <li>Go to folder: <code>cd 01vitereact</code></li>
          <li>Install packages: <code>npm install</code></li>
          <li>Run Vite project: <code>npm run dev</code></li>
        </ul>
        <hr />
        <p>
          In React, <code>App</code> and <code>index</code> will remain in the <code>src</code> folder; you can delete the rest.
        </p>
      </div>
    </>
  );
}

export default App;