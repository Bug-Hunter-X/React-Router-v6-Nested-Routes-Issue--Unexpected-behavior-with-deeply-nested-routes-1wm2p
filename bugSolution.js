```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  let location = useLocation();
  console.log('Home location:', location);
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
      <p>Current path: {location.pathname}</p>      
    </div>
  );
}

function About() {
  let location = useLocation();
  console.log('About location:', location);
  return (
    <div>
      <h1>About Page</h1>
      <p>Current path: {location.pathname}</p>
    </div>
  );
}
```