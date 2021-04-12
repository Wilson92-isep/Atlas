import React from 'react';
import { useState , useEffect} from 'react';
import logo from './logo/Logo_nuit.png';
import logo_subway from './logo/subway.png';
//import logo_qatar from './logo/logo_qatar.png'
import logo_ocs from './logo/logo_ocs.png'
import logo_bb from './logo/logo_bb.png'
import logo_voiture from './logo/logo_voiture.png'
import logo_lyf from './logo/logo_lyf.png'

import './styles.css';
import Liste from './Component_liste';

export function Sponsor() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:5000/content/sponsors")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="corp">
       <h1 className="font">Les Sponsors</h1>
        <ul className="liste">
       {Object.values(items).map(item => (
         <li>
           <div className="carre_liste">
              <div className="cercle_logo">
                  <img src={require('./logo/logo_qatar.png')} className="logo_sponso" alt="logo" />
              </div>
              <div className="carre_descri">
                  <h4 className="titre_descri">{item.name}</h4>
                  <p>{item.description}</p>
        </div>
    </div>
         </li>
       ))}
       </ul>
       </div>
      </div> 
    );
  }
}


