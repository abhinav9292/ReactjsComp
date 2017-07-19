/**
 * Created by abhinavreddymareddy on 5/2/17.
 */
import  React  from 'react';

export class About extends React.Component{
  render() {

      var name = "Vicky";
      return (
          <div className="container-fluid">
              <div className="col-md-6">
                  My name is {name}, I am from  {this.props.bio.country}  and I can speak {this.props.bio.languages} langagues. I weigh {this.props.bio.weight} kgs.
                  I have {this.props.body.eyes} eyes and {this.props.body.hair} hair.I support  {this.props.bio.political} party.
                  Some alias names of mine  are

                  <ul>{this.props.bio.snames.map((names,i) => <li key={i}>{names}</li> )}</ul>
              </div>
              <hr/>
              {this.props.children}
          </div>

      )
  }
};

React.propTypes = {
    country: React.PropTypes.string,
    body: React.PropTypes.string,
    languages: React.PropTypes.number,
    proper: React.PropTypes.string,
    weight: React.PropTypes.number,
    political: React.PropTypes.string,
    children: React.PropTypes.element.isRequired
};


