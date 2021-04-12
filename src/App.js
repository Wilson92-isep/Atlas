import React, {Component} from 'react';
import {Home} from './Home'
import {Sponsor} from './Sponsor'
import {Goodies} from './Goodies'
import {Connexion} from './Connexion'
import {Inscription} from './Inscription'
import "bootstrap/dist/css/bootstrap.min.css";
 
class App extends Component { 
  render () {
    return(
    	<div>
    <Home></Home>
    <Sponsor></Sponsor>
    <Goodies></Goodies>
    <Connexion></Connexion>
    <Inscription></Inscription>
    
    </div>
    );
  }
}



export default App;
