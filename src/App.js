import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import CharacterCard from './components/CharacterCard';


class App extends Component {
    render()  {
        return ( 
          <div className="App">
            <Header />
            <CharacterCard />
          </div>
               ) 
        }
  }


export default App;


