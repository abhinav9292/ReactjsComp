import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';

class App extends React.Component{
    onGreet(){
        alert("Baingan! jaa ke apna kaam karr ");
    }

    render() {
        var body = {
            eyes : "Black",
            hair : "Bald",
            films: ["Dunkirk","Joker","War Horse","Forrest Gump"]

        };

        var bio = {
            country : "Uzbeki",
            languages: 4,
            proper : "Mumbai",
            weight: 100,
            political : "Nazi",
            snames : ["Vikram","Vicky","Vik","Bosarapu","Bosa"]

        };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header >

                        </Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Vicky"} initialAge={25} body={body} greet={this.onGreet}>
                            <div>
                                <h4>Notice</h4>
                                <p>The above list may change from time to time
                                </p>
                            </div>
                        </Home>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <About bio = {bio}  body={body}>
                            {/*<p>India has {india.states} states</p>*/}
                        </About>
                    </div>
                </div>
            </div>

        );
    }
}

render(<App/>,window.document.getElementById("app"));