import React, { Component } from "react";
import Counter from "..//Counter";
import "./CharacterCard.css";
// import characters from "../../public/assets/characters.json"
import mBison from "../../public/images/m-bison.png"
import chunLi from "../../public/images/chun_li.png"
import geeseHoward from "../../public/images/geese_howard.png"
import heihachi from "../../public/images/heihachi.png"
import king_tekken from "../../public/images/king_tekken.png"
import king_kof from "../../public/images/king-kof.png"
import ryu from "../../public/images/ryu.png"
import morrigan from "../../public/images/morrigan.png"
import servbot from "../../public/images/servBot.png"


class CharacterCard extends React.Component {

state = {
	count: 0,
	characters: []
};

 handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

chooseCharacter = (props) => {
		console.log(props);
}
	
render() {
	return (
		<div>
		    <div className="container">
              <div className="row">
                <div className="col-md-6">
                <h3>Text<span onClick={ this.state.count }></span></h3>
                </div>
              </div>
            </div>
                <div className="container" className="characterChoices">
	              <div className="row">
                    <img src={ heihachi } id="heihachi" onClick={this.chooseCharacter} alt="heihachi" handleIncrement={this.handleIncrement} />
                    <img src={ mBison } id="m-bison" onClick={this.chooseCharacter} alt="m-bison" handleIncrement={this.handleIncrement} />
                    <img src={ chunLi } id="chun-li" onClick={this.chooseCharacter} alt="chun-li" handleIncrement={this.handleIncrement} />
                  </div>
                  <div className="row">
                    <img src={ king_kof } id="king-kof" onClick={this.chooseCharacter} alt="King-kof" handleIncrement={this.handleIncrement} />
                    <img src={ ryu } id="ryu" onClick={this.chooseCharacter} alt="ryu" handleIncrement={this.handleIncrement} />
                    <img src={ king_tekken } id="king-tekken" onClick={this.chooseCharacter} alt="king" handleIncrement={this.handleIncrement} />
                  </div>
                  <div className="row">
                    <img src={ servbot } id="servbot" onClick={this.chooseCharacter} alt="servbot" handleIncrement={this.handleIncrement} />
                    <img src={ morrigan } id="morrigan" onClick={this.chooseCharacter} alt="morrigan" handleIncrement={this.handleIncrement} />
                    <img src={ geeseHoward } id="geese" onClick={this.chooseCharacter} alt="geese_howard" handleIncrement={this.handleIncrement} />
                    </div>
                </div>
        </div>
          )
	}
}

{/*}
	// return (
 //      <div>
 //        {this.state.characters.map(props => (
 //          <span
 //            id={props.id}	
 //            key={props.id}
 //            name={props.name}
 //            image={props.image}
 //          />
 //        ))}
	// 		<div><img src={`${characters[2].image}`} alt="chunli" className="img-responsive"/></div>
	// 		<div><img src={`../../public/images/morrigan.png`} alt="chunli" className="img-responsive"/></div>

 //      </div>


	// 		)
      }
}
*/}
export default CharacterCard;