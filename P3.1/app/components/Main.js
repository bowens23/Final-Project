// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;



var Main = React.createClass({



  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>Vocabulary Builder</strong></h2>
          <hr />
          <p>
            <Link to="/Child1"><button className="btn btn-primary btn-lg">My Word Lists</button></Link>
            <Link to="/Form"><button className="btn btn-primary btn-lg">Create a New Word List</button></Link>
          </p>
        </div>

   <div className="col-md-6">

       

          </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>

    );
  }

});

// Export the component back for use in other files
module.exports = Main;

