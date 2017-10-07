// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var skript  = require("../js/skript");

// var ListMaker = require ("./ListMaker")

var Words = React.createClass({



//we can recycle this handle change function from the other file. it is boilerplate.
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleSubmitWord(newState) {
        event.preventDefault();
    console.log(this.state);
    var vocabword = this.state.vocabword
        skript.createWordGetSynonym(vocabword)
  },

  render: function() {
    

    return (

<div>
  <form onSubmit={this.handleSubmitWord}>
   <div>
      <div className="container">
      this is the words page
      </div>
      <div>
        This is where you add words 
        </div>
        </div>
        <p> I'm a form to add words</p>
          <div className = "form-group">
          <div className = "whatever">
          <input type="text" className="form-control" onChange={this.handleChange} id="vocabword"/>
          </div>
          <button type="submit" className="btn btn-success submit">Submit</button>
        </div>
       </form>
  <div>
  this is where the existing words show up
  </div>
</div>
    );
  }
});

module.exports = Words;

