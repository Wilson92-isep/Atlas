import React from 'react';
import logo from './logo/Logo_nuit.png';
import lot_enceinte from './lot/lot_enceinte.jpeg'
import lot_coco from './lot/lot_coco.jpeg'
import lot_baba from './lot/lot_baba.jpeg'
import lot_baby from './lot/lot_baby.jpeg'
import lot_carte from './lot/lot_carte.jpeg'
import lot_coque from './lot/lot_coque.jpeg'
import lot_pacome from './lot/lot_pacome.jpeg'
import lot_lim_lim from './lot/lot_lim_lim.jpeg'
import lot_sac from './lot/lot_sac.jpeg'
import lot_voyage from './lot/lot_voyage.jpeg'
import lot_laurene from './lot/lot_laurene.jpeg'
import lot_video from './lot/lot_voyage.jpeg'
import './styles.css';

function handle() {
  alert("T'as participation a bien été prise en compte")
}

export const Goodies = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="corp">
       <h1 className="font">Tombola</h1>
       <div className="tombola">
        <img src={lot_enceinte} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h3 className="nom_lot" >Enceinte</h3>
          <div className="bouton" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_coco} className="lot" alt="lot_tombola" />
        <div className="corp61">
          <h3 className="nom_lot" >Une séance mix avec Coco</h3>
          <div className="bouton1" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_baby} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h3 className="nom_lot" >Mini baby-foot</h3>
          <div className="bouton" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_coque} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h3 className="nom_lot" >Coque téléphone</h3>
          <div className="bouton" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_baba} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h5 className="nom_lot" >Moment complice sur discord avec Etienne et Baba</h5>
          <div className="bouton1" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_carte} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h3 className="nom_lot" >Carte du monde à gratter</h3>
          <div className="bouton1" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_video} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h3 className="nom_lot" >Vidéo-projecteur</h3>
          <div className="bouton" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_pacome} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h5 className="nom_lot" >Tuto brassage de bière avec Pacôme</h5>
          <div className="bouton1" onClick={handle}>
            <h6>Je participe !</h6> 
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_sac} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h3 className="nom_lot" >Sac à dos</h3>
          <div className="bouton" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_lim_lim} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h3 className="nom_lot" >Jeux limite-limite</h3>
          <div className="bouton" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_voyage} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h3 className="nom_lot" >Valise</h3>
          <div className="bouton" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
       <div className="tombola">
        <img src={lot_laurene} className="lot" alt="lot_tombola" />
        <div className="corp6">
          <h5 className="nom_lot" >Séance photo avec Laurene</h5>
          <div className="bouton" onClick={handle}>
            <h6>Je participe !</h6>
          </div>
        </div>  
       </div>
      </div>
    </div>
  );
}

