import React, {Component} from 'react';

class Liste extends Component { 
    render (props) {
      return(     
    <div className="carre_liste">
        <div className="cercle_logo">
            <img src={this.props.logo} className="logo_sponso" alt="logo" />
        </div>
        <div className="carre_descri">
            <h4 className="titre_descri">{this.props.title}</h4>
            <p>{this.props.descri}</p>
        </div>
    </div>
    );
  }
}

export default Liste;
