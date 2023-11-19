import React from 'react';
import './App.css'; 
import background from './background.jpeg';
import { AppProvider } from './AppContext';
import LazyLoadedComponents from './LazyLoadedComponents';

function App() {
  return (
    <AppProvider>
      <div className="App" >
      <header style={{ padding: '20px', textAlign: 'center', color: '#fff' }}>
       <h1>My Website</h1>
         <nav style={{ marginTop: '10px' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
              <li style={{ marginRight: '20px' }}>
                <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
              </li>
              <li>
                <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
              </li>
          </ul>
        </nav>
      </header>
      <main><h1 className="text-4xl font-bold mb-4">My Landing Page</h1>
        <LazyLoadedComponents />
      </main>
      <footer>
        <p>&copy; 2023 Nafiz Sizan</p>
      </footer>
      </div>
    </AppProvider>
  );
}

export default App;
