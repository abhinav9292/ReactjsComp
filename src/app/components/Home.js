/**
 * Created by abhinavreddymareddy on 4/11/17.
 */
import React from 'react';


export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age : props.initialAge
        };
    }

    add(){
        this.setState({
            age : this.state.age + 3
        });
    }

    sub(){
       this.setState({
           age : this.state.age -3
       });

    }    render() {
        return(
            <div>
                <p>It is a new component</p>
                <span>My name is  {this.props.name} and my age is {this.state.age}</span>
                <p>i am having { this.props.body.eyes }</p>
                <div>
                    <h4>I have watched</h4>
                    <ul>
                        {this.props.body.films.map((film, i)=> <li key={i}>{film}</li>)}
                    </ul>
                    <button onClick={() => this.add()} className="btn btn-primary"> Add it! </button>
                    <br/>
                    <br/>

                    <button onClick={() => this.sub()} className="btn btn-primary">kill me to zero!</button>
                    <hr/>
                    <button onClick={this.props.greet} className="btn btn-primary"> Greet me</button>
                </div>

                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name : React.PropTypes.string,
    initialAge : React.PropTypes.number,
    body:React.PropTypes.object,
    greet: React.PropTypes.func,
    children: React.PropTypes.element.isRequired
};