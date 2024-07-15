// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Footer from './components/Footer';
import SiteRoutes from './routes/SiteRoutes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="pt-[5rem] px-2 py-2 dark:bg-dark-background-color dark:text-dark-text-color">
        <div className="mx-auto max-w-xl bg-white dark:bg-dark-background-color rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col dark:bg-gray-800 py-4">
              <SiteRoutes />
              <Social />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
