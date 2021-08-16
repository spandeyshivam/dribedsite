
import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/login.js';
import Header from './component/heading.js';
import Signup  from './component/signup';
import Footer from './component/footer';
import { Container,Row,Col, Button,Alert,Breadcrumb,Card, FormLabel, Form } from 'react-bootstrap'; 

function App() {
  return (
    <div >  
      <header className="App-header">
        <Container>
        <Login />
        <Header />
<br/> <br/><br/><br/><br/><br/><br/>
<div>
<select name="dropdown" className="options">
    <option value="Popular">Popular</option>
    <option value="New & NoteWorthy">New & NoteWorthy</option>
    <option value="goods for sale">goods for sale</option>
  </select>
</div>
<div class="newmenu">
  <a class="newmenus" href="#insp">Inspiration</a>
  <a href="#ALL">All</a>
  <a href="#AN">Animation</a>
  <a href="#BR">Branding</a>
  <a href="#Ill">Illustrations</a>
  <a href="#MB">Mobile</a>
  <a href="#PR">Print</a>
  <a href="#PD">Product Design</a>
  <a href="#Ty">Typography</a>
  <a href="#WD">Web Design</a>
</div>
<br/>
<br/>
<div className="box">
<div class="row">
  <div class="column">
    <img src="images1.jpg" alt="roger"/>
  </div>
  <div class="column">
    <img src="images2.jpg" alt="roger2"/>
  </div>
  <div class="column">
    <img src="images3.jpg" alt="roger3"/>
  </div>
  <br/>
  <div class="column">
    <img src="federer-reuters-fourth-round.jpg" alt="roger4"/>
  </div>
  <div class="column">
    <img src="federer-reuters-fourth-round.jpg" alt="roger5"/>
  </div>
  <div class="column">
    <img src="Federer.jpg" alt="roger6"/>
  </div>
  <br/>
  <div class="column">
    <img src="roger-federer-fb.jpg" alt="roger7"/>
  </div>
  <div class="column">
    <img src="Roger-Federer-Wimbledon-2021.webp" alt="roger8"/>
  </div>
  <div class="column">
    <img src="merlin_188806203_00eef947-70cd-4de1-b32d-a3d1afbaf240-mediumSquareAt3X.jpg" alt="roger9"/>
    </div>  
</div>
</div>

<br/><br/>
<Signup />
<Footer />
      </Container>
      </header>
    </div>
  );
}

export default App;

