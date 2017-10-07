// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var skript  = require("../js/skript");

// var ListMaker = require ("./ListMaker")

var Child1 = React.createClass({

getInitialState: function(){
  return {lists: ["loading","loading","loading","loading","loading"] };

},


componentDidMount : function () {
 
return skript.showAllskript()
      .then(function(response) {

        console.log("I'm the response: "+ response)

        var word = response.data


         this.setState ({
          lists: [word]
        });
      }.bind(this));

},

deletes : function(id){
  console.log(id)
  console.log(this)
 event.preventDefault();
 var id = id

 skript.deleteList(id).then(()=>{


    return skript.showAllskript()
      .then(function(response) {

        console.log(response)

        var word = response.data


         this.setState ({
          lists: [word]
        });
      }.bind(this));
this.ListMaker()
 })

},

ListMaker : function() {
    var rows =[];
    console.log(this.state.lists[0]);
    if( this.state.lists[0].map ){
      rows = this.state.lists[0].map(function(el, index){
        return <h3><li key={index}>{el.word}
          <button  onClick={(event) => this.deletes(el.id)} className="btn btn-primary btn-lg del" >Delete List</button>
          <Link to={"/Words?id="+el.word+"&listid="+el.id}><button className="btn btn-primary btn-lg">Words in this list</button></Link>
          </li></h3>
      }, this);
    }

    console.log(rows);
    return rows;

},

  render: function() {
    

    return (

      <div className="containerz">
        <ul>
          {this.ListMaker()}
        </ul>
      </div>

    );
  }
});

module.exports = Child1;
