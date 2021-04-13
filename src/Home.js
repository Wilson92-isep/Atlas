import React from 'react';
import logo from './logo/Logo_nuit.png';
import photo_bureau from './photo/bureau.png'
import photo_Trez_SG from './photo/Trez_sg.png'
import photo_Bureau3 from './photo/Bureau3.png'
import photo_Sponsor1 from './photo/Sponsor1.png'
import photo_Sponsor2 from './photo/Sponsor2.png'
import photo_com1 from './photo/Comm1.png'
import photo_com2 from './photo/Comm2.png'
import photo_com3 from './photo/Comm3.png'
import photo_crea from './photo/Crea.png'
import photo_crea2 from './photo/Crea2.png'
import photo_crea3 from './photo/Crea3.png'
import photo_tech from './photo/Tech.png'
import photo_event1 from './photo/Event.png'
import photo_event2 from './photo/Event2.png'
import photo_mascotte from './photo/Mascotte.png'
import persos from './svg/persos.svg'
import sponsors from './svg/partenaires.svg'
import gift from './svg/gift.svg'
import './styles.css';

export const Home = () => {

return (
<div className="App">
   <div class="navbarbottom">
      <img src = {gift} className = "svg1"></img>
      <img src = {persos} className = "svg2"></img>
      <img src = {sponsors} className = "svg3"></img>
   </div>
   <div className="corp">
      <div className = "App-header">
         <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className = "background-image">
         <h1 className="font margin">Le bureau</h1>
         <img src = {photo_bureau} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1 ">
                  <h1 className = "name">Tom</h1>
                  <h2 className = "roles">VP</h2>
               </div>
               <div className = "Role2 ">
                  <h1 className = "name">Quentin</h1>
                  <h2 className = "roles">President</h2>
               </div>
               <div className = "Role3 ">
                  <h1 className = "name">Lucie</h1>
                  <h2 className = "roles">VP</h2>
               </div>
            </div>
         </div>
         <img src = {photo_Trez_SG} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1 ">
                  <h1 className = "name">Pierre</h1>
                  <h2 className = "roles">Trésorier</h2>
               </div>
               <div className = "Role2 ">
                  <h1 className = "name">Amaury</h1>
                  <h2 className = "roles">SG</h2>
               </div>
            </div>
         </div>
         <img src = {photo_Bureau3} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1v2">
                  <h1 className = "name">Laurie</h1>
                  <h2 className = "roles">Respo Académique</h2>
               </div>
               <div className = "Role2v2">
                  <h1 className = "name">Jieming</h1>
                  <h2 className = "roles">Respo Internationale</h2>
               </div>
               <div className = "Role3v2">
                  <h1 className = "name">Baptiste</h1>
                  <h2 className = "roles">Respo Associatif</h2>
               </div>
            </div>
         </div>
         <h1 className="font margin">Pôle Sponsors</h1>
         <img src = {photo_Sponsor1} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1">
                  <h1 className = "name">Lilian</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2">
                  <h1 className = "name">Sebastien</h1>
                  <h2 className = "roles">Respo Sponsors</h2>
               </div>
               <div className = "Role3">
                  <h1 className = "name">Etienne</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <img src = {photo_Sponsor2} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1">
                  <h1 className = "name">Orthense</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2">
                  <h1 className = "name">Wilhem</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <h1 className="font margin">Pôle Communication</h1>
         <img src = {photo_com1} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1">
                  <h1 className = "name">Florence</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2">
                  <h1 className = "name">Linda</h1>
                  <h2 className = "roles">Respo Communication</h2>
               </div>
               <div className = "Role3">
                  <h1 className = "name">Dimitar</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <img src = {photo_com2} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1">
                  <h1 className = "name">Pauline</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2">
                  <h1 className = "name">Léonie</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <img src = {photo_com3} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1">
                  <h1 className = "name">Nacim</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2">
                  <h1 className = "name">Alice</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <h1 className="font margin">Pôle Créa</h1>
         <img src = {photo_crea} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1 ">
                  <h1 className = "name">Paul</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2 ">
                  <h1 className = "name">Simon</h1>
                  <h2 className = "roles">Respo Créa</h2>
               </div>
               <div className = "Role3 ">
                  <h1 className = "name">Alix</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <img src = {photo_crea2} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1">
                  <h1 className = "name">Killian</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2">
                  <h1 className = "name">Nader</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <img src = {photo_crea3} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1">
                  <h1 className = "name">Baptiste</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2">
                  <h1 className = "name">Laurène</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <h1 className="font margin">Pôle Tech</h1>
         <img src = {photo_tech} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1 ">
                  <h1 className = "name">Pénélope</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2 ">
                  <h1 className = "name">Jéremy</h1>
                  <h2 className = "roles">Respo tech</h2>
               </div>
               <div className = "Role3 ">
                  <h1 className = "name">Wilson</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <h1 className="font margin">Pole Event</h1>
         <img src = {photo_event1} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1 ">
                  <h1 className = "name">Clothilde</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2 ">
                  <h1 className = "name">Corentin</h1>
                  <h2 className = "roles">Respo Event</h2>
               </div>
               <div className = "Role3 ">
                  <h1 className = "name">Casimir</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <img src = {photo_event2} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1 ">
                  <h1 className = "name">Pacome</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
               <div className = "Role2 ">
                  <h1 className = "name">Victor</h1>
                  <h2 className = "roles">Respo tech</h2>
               </div>
               <div className = "Role3 ">
                  <h1 className = "name">Chloé</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
         <h1 className="font margin">La Mascotte</h1>
         <img src = {photo_mascotte} className = "images_membre"></img>
         <div className="desc_roles">
            <div className="corp_roles">
               <div className = "Role1">
                  <h1 className = "name">Identité secrète !</h1>
                  <h2 className = "roles">Membre</h2>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
}