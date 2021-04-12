import React from 'react';
import logo from './logo/Logo_nuit.png';
import photo_quentin from './photo/quentin.png'
import photo_laurie from './photo/laurie.png'
import photo_pierre from './photo/pierre.png'
import photo_lucie from './photo/lucie.png'
import photo_jieming from './photo/jieming.png'
import photo_amaury from './photo/amaury.png'
import photo_tom from './photo/tom.png'
import photo_baba from './photo/baptiste.png'
import photo_etienne from './photo/etienne.png'
import photo_seb from './photo/seb.png'
import photo_lilian from './photo/lilian.png'
import photo_wilhem from './photo/wilhem.png'
import photo_hortense from './photo/hortense.png'
import photo_flo from './photo/flo.png'
import photo_leonie from './photo/leonie.png'
import photo_linda from './photo/linda.png'
import photo_alice from './photo/alice.png'
import photo_dimitar from './photo/dimitar.png'
import photo_pauline from './photo/pauline.png'
import photo_nacim from './photo/nacim.png'
import photo_nader from './photo/nader.png'
import photo_theo from './photo/theo.png'
import photo_simon from './photo/simon.png'
import photo_laurene from './photo/laurene.png'
import photo_alix from './photo/alix.png'
import photo_killian from './photo/killian.png'
import photo_paul from './photo/paul.png'
import photo_penelope from './photo/penelope.png'
import photo_jerem from './photo/jerem.png'
import photo_clothilde from './photo/clothilde.png'
import photo_alienor from './photo/alienor.png'
import photo_chloe from './photo/chloe.png'
import photo_victor from './photo/victor.png'
import photo_corentin from './photo/corentin.png'
import photo_pacome from './photo/pacome.png'
import photo_lucas from './photo/lucas.png'
import photo_cas from './photo/casimir.png'
import photo_wilson from './photo/wilson.png'
import photo_leopold from './photo/leopold.png'
import photo_mascotte from './photo/mascotte.png'

import './styles.css';


export const Home = () => {
  return (
    <div className="App">
        
      <div className="corp">
      <div className = "App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </div>
        <div className = "background-image">
        <div className>
       <h1 className="font margin">Le bureau</h1>
       </div>
       <div className="corp1">
         <div className="div1">
          <img src={photo_quentin} className="tof" alt="photo_membre" /> 
          <img src={photo_tom} className="tof" alt="photo_membre" />
          <img src={photo_pierre} className="tof" alt="photo_membre" />
          <img src={photo_jieming} className="tof" alt="photo_membre" />
         </div>
         <div className="div1">
          <img src={photo_lucie} className="tof" alt="photo_membre" />
          <img src={photo_amaury} className="tof" alt="photo_membre" />
          <img src={photo_baba} className="tof" alt="photo_membre" /> 
          <img src={photo_laurie} className="tof" alt="photo_membre" />
         </div>
       </div>
       <h1 className="font margin">Pole Sponsor</h1>
       <div className="corp2">  
         <div className="div1">
          <img src={photo_seb} className="tof" alt="photo_membre" /> 
          <img src={photo_lilian} className="tof" alt="photo_membre" />
          <img src={photo_hortense} className="tof" alt="photo_membre" />
         </div>
         <div className="div1">
          <img src={photo_etienne} className="tof" alt="photo_membre" />
          <img src={photo_wilhem} className="tof" alt="photo_membre" />
         </div>
        </div>
        <h1 className="font margin">Pole Communication</h1>
        <div className="corp1">
         <div className="div1"> 
          <img src={photo_linda} className="tof" alt="photo_membre" /> 
          <img src={photo_flo} className="tof" alt="photo_membre" />
          <img src={photo_dimitar} className="tof" alt="photo_membre" />
          <img src={photo_pauline} className="tof" alt="photo_membre" />
         </div>
         <div className="div1">
          <img src={photo_leonie} className="tof" alt="photo_membre" />
          <img src={photo_alice} className="tof" alt="photo_membre" />
          <img src={photo_nacim} className="tof" alt="photo_membre" />
         </div>         
        </div>
        <h1 className="font margin">Pole Créa</h1>
        <div className="corp1">
         <div className="div1"> 
          <img src={photo_simon} className="tof" alt="photo_membre" /> 
          <img src={photo_nader} className="tof" alt="photo_membre" />
          <img src={photo_theo} className="tof" alt="photo_membre" />
          <img src={photo_laurene} className="tof" alt="photo_membre" />
         </div>
         <div className="div1">
          <img src={photo_alix} className="tof" alt="photo_membre" />
          <img src={photo_killian} className="tof" alt="photo_membre" />
          <img src={photo_paul} className="tof" alt="photo_membre" />
         </div>         
        </div>
        <h1 className="font margin">Pole Tech</h1>
        <div className="corp3">
         <div className="div1"> 
          <img src={photo_jerem} className="tof" alt="photo_membre" /> 
          <img src={photo_penelope} className="tof" alt="photo_membre" />
         </div>
         <div className="div1">
          <img src={photo_wilson} className="tof" alt="photo_membre" />
         </div>         
        </div>
        <h1 className="font margin">Pole Event</h1>
        <div className="corp4">
         <div className="div1"> 
          <img src={photo_corentin} className="tof" alt="photo_membre" /> 
          <img src={photo_clothilde} className="tof" alt="photo_membre" />
          <img src={photo_lucas} className="tof" alt="photo_membre" />
          <img src={photo_victor} className="tof" alt="photo_membre" />
          <img src={photo_alienor} className="tof" alt="photo_membre" />
         </div>
         <div className="div1">
          <img src={photo_chloe} className="tof" alt="photo_membre" />
          <img src={photo_pacome} className="tof" alt="photo_membre" />
          <img src={photo_cas} className="tof" alt="photo_membre" />
          <img src={photo_leopold} className="tof" alt="photo_membre" />
         </div>         
        </div>
        <h1 className="font margin">La Mascotte</h1>
        <div className="corp5">
          <img src={photo_mascotte} className="tof" alt="photo_membre" />        
        </div>
      </div>
    </div>
    </div>
  );
}

