import React from 'react';
import logo from './logo/Logo_nuit.png';
import './styles.css';


export function Connexion() {
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
          <div className="fond_boutton">
            <h4 className="boutton_co1">Inscription</h4>
            <h4 className="boutton_co">Connexion</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

