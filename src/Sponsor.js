import React from 'react';
import logo from './logo/Logo_nuit.png';
import logo_qatar from './logo/logo_qatar.png'
import logo_ocs from './logo/logo_ocs.png'
import logo_bb from './logo/logo_bb.png'
import logo_voiture from './logo/logo_voiture.png'
import logo_lyf from './logo/logo_lyf.png'

import './styles.css';

export const Sponsor = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="corp">
       <h1 className="font">Les Sponsor</h1>
       <div className="corp1">
         <div className="div1">
          <img src={logo_qatar} className="tof_sponsor" alt="photo_sponsor" /> 
          <img src={logo_bb} className="tof_sponsor" alt="photo_sponsor" />
          <img src={logo_lyf} className="tof_sponsor" alt="photo_sponsor" />
         </div>
         <div className="div1">
          <img src={logo_ocs} className="tof_sponsor" alt="photo_sponsor" />
          <img src={logo_voiture} className="tof_sponsor" alt="photo_sponsor" />
         </div>
       </div>
      </div> 
    </div>
  );
}

