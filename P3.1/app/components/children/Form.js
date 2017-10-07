// Include React
var React = require("react");

var Link = require("react-router").Link;

var skript  = require("../js/skript");



var Form = React.createClass({

  handleChange(event) {
    var newState = {};

    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleSubmit(newState) {
        event.preventDefault();
    console.log(this.state);
    var word = this.state.word
        skript.createPost(word)
  },

  render: function() {

    return (

        <form onSubmit={this.handleSubmit}>

          <div className = "form-group">
          <div className = "whatever">
          <input type="text" className="form-control" onChange={this.handleChange} id="word"/>
          </div>
          <button type="submit" className="btn btn-success btn-lg submit">Submit</button>
          </div>
        </form>

    );
  }
});

module.exports = Form;
