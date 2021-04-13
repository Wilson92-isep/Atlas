import React from 'react';
import logo from './logo/Logo_nuit.png';
import './styles.css';
import persos from './svg/persos.svg'
import sponsors from './svg/partenaires.svg'
import gift from './svg/gift.svg'

export function Inscription() {
  return (
    <div className="App">
      <div class="navbarbottom">
        <img src = {gift} className = "svg1"></img>
        <img src = {persos} className = "svg2"></img>
        <img src = {sponsors} className = "svg3"></img>
     </div>
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

