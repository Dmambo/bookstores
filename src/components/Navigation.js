import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/user.png';
import '../styles/Navigation.css';

const Navigation = () => (
  <>
    <nav>
      <div className="links">
        <div className="Logo">Bookstore CMS</div>
        <div className="navbar">
          <NavLink to="/" exact="true" className="list active">
            Books
          </NavLink>
          <NavLink to="/categories" className="list">
            Categories
          </NavLink>
        </div>
      </div>
      <div className="user">
        <img src={user} alt="user" />
      </div>
    </nav>
  </>
);

export default Navigation;
