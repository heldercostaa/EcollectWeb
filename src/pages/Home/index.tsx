import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import './styles.css'

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="E-collect" />
        </header>

        <main>
          <h1>Your marketplace to collect waste.</h1>
          <p>Our goal is to help people find collect points in an efficient way.</p>
        
          <a href="/register">
            <span>
              <FiLogIn />
            </span>
            <strong>Register a new collect point</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default Home;