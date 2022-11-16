import React, { useState } from 'react';
import Navigation from './Navigation';
import Church from './Church';
import Friends from './Friends';
import Group from './Group';
import Profile from './Profile';
import Home from './Home';


function Header() {
    const [currentPage, handlePageChange] = useState("Home");

    const renderPage = () => {
        switch (currentPage) {
            case 'Church':
                return <Church />;
            case 'Friends':
        }
    };

    return (

        <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="/"
          >
            <span className="content is-large">The Guide</span>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
        
    );
}

export default Header;