import React from "react";
class Header extends React.Component {
	render()  {
		return (
      <div>

            <header className="App-header">
              <h1 className="App-title"> Memory Game </h1>
              <h5 className="instruction">Memorize the board</h5>
              <h5 className="instruction">Click a character (The board will shuffle)</h5>
              <h5 className="instruction">In box you clicked, there should be a new character</h5>
              <h5 className="instruction">Where was this new character before the board shuffled? (Do you remember?)</h5>
              <h5 className="instruction">Guess (Click)</h5>
              <h5 className="instruction">Lose</h5>
              <h5 className="instruction">Get Frustrated</h5>
              <h5 className="instruction">Start back at step one</h5>
              <h5 className="instruction">--------------------</h5>
              <h5 className="instruction">Level Up Your Memory</h5>
            </header>

      </div>
            )
   	}
}

export default Header;