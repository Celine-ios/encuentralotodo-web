import React, { Component } from 'react';
import logo from './assets/images/icon.png';
import './App.css';

class App extends Component {
      
  render() {
    return (
      <div className="App">
        <header>
          <div style={{marginTop: '10%'}}>
            <img src={logo} alt="Hello"/>
          </div> 
        </header>
        <div className="container">
          <form onSubmit={this.sendIt} method="post" className="login">
            <div>
              <label htmlFor="email" style={{color: '#fff'}}>Email</label>
              <br />
              <input type="text" name="email" className="input" placeholder="Email"/>
            </div>
            <div>
              <label htmlFor="password" style={{color: '#fff'}}>Contraseña</label>
              <br />
              <input type="password" name="password" className="input" placeholder="Contraseña"/>
            </div>
            <div>
              <button type="submit" className="btn btn-purple" style={{width: '60%', height: '3em',margin: '20%'}}>Iniciar Sesión</button>
            </div>
          </form>
        </div>
        <footer class="footer">
          <div class="footer-container">
            <span>encuentralotodo, C.A</span>
            <span>All Rights Reserved</span>
            <span>2018</span>      
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
