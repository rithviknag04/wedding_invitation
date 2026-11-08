import React, { useState } from 'react';

export default function Navbar({ currentPage, onNavigate }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleLinkClick = (target) => {
    onNavigate(target);
    setNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top" aria-label="Pages">
      <div className="container">
        <a
          className="navbar-brand"
          href="#welcome"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('welcome');
          }}
        >
          P & S
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="nv">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('home');
                }}
              >
                Invitation
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'story' ? 'active' : ''}`}
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('story');
                }}
              >
                Our story
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'details' ? 'active' : ''}`}
                href="#details"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('details');
                }}
              >
                Details
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'gallery' ? 'active' : ''}`}
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('gallery');
                }}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'family' ? 'active' : ''}`}
                href="#family"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('family');
                }}
              >
                Family
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

