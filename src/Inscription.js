import React from 'react';
import logo from './logo/Logo_nuit.png';
import './styles.css';

export function Inscription() {
  return (
    <div className="App">
      <div className="fond">
        <img src={logo} className="logo_co" alt="logo" />
        <div className="fond_co">
          <h3 className="mail">Mail ISEP</h3>
          <form >
            <input className="input"/>
          </form>
          <h3 className="mdp">Mot de passe</h3>
          <form >
            <input className="input"/>
          </form>
          <h3 className="mdp">Promo</h3>
          <form >
            <input className="input"/>
          </form>
          <h4 className="boutton_co2">Inscription</h4>
        </div>
      </div>
    </div>
  );
}

