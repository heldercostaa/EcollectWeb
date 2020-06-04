import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './styles.css'

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="E-collect" />
          <h1>E-collect</h1>
        </header>

        <main>
          <h1>Your marketplace to collect waste.</h1>
          <p>Our goal is to help people find collect points in an efficient way.</p>
        
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Register a collect point</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;