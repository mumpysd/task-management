import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskManagement from './components/TaskManagement';
import About from './components/About';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <Router>
        <Routes>
          {/* Parent route for App component */}
          <Route path="/" element={<App />}>
            {/* Nested Routes */}
            <Route index element={<TaskManagement />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
