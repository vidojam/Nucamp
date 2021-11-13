
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import CampsiteInfo from './components/CampsiteInfoComponent';
import './App.css';
import { CAMPSITES } from './shared/campsites'

// app to build card list 

// each component will have a toggle thing 



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} />
        <CampsiteInfo campsite={this.state.campsites[0]} />
      </div>
    );
  }
}

// this file is a module because there is an export 
export default App;