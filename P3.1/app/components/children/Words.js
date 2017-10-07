// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var skript  = require("../js/skript");


// var ListMaker = require ("./ListMaker")

var Words = React.createClass({

getInitialState: function(){
  return {lists: ["loading","loading","loading","loading","loading"]
 };

},


//the only reason i have this function here is because i can't access the WordId 
//inside the handleSubmitWord
componentDidMount : function () {
 
var WordId = this.props.location.query.listid;

    return skript.showAllWordsInList(WordId)
      .then(function(response) {

        console.log(response)

        var word = response.data


         this.setState ({
          lists: [word]
        });
      }.bind(this));
},




//we can recycle this handle change function from the other file. it is boilerplate.
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleSubmitWord(newState) {
  
    event.preventDefault();
    var vocabword = this.state.vocabword
    // var WordId = 7
    var WordId = this.props.location.query.listid;


  skript.createWordGetSynonym(vocabword, WordId).then( () => {

  // var WordId = this.props.location.query.listid;

    return skript.showAllWordsInList(WordId).then(function(response) {

        console.log(response.data)

         this.setState ({
          lists: [response.data]
        });
      }.bind(this));

      this.SonOfListMaker()
 })
//return axios request and the promise with the response returned

},

deletes : function(id){
  console.log(id)
  console.log(this)
 event.preventDefault();
 var id = id

 skript.deleteWord(id).then(() => {

  var WordId = this.props.location.query.listid;

    return skript.showAllWordsInList(WordId)
      .then(function(response) {

        console.log(response)



         this.setState ({
          lists: [response.data]
        });
      }.bind(this));

      this.SonOfListMaker()
  console.log("it ditnasdf fasd")
 })
//return axios request and the promise with the response returned

},



  SonOfListMaker : function() {
    var rows =[];
    // console.log(this.state.lists[0]);
    if( this.state.lists[0].map ){
      rows = this.state.lists[0].map(function(el, index){
        return <h3><li key={index} id = {el.id}>{el.vocabword},  translation:{el.vocabwordsynonym}
        <button className="btn btn-primary btn-md del" onClick={(event) => this.deletes(el.id)} >Delete Word</button>




          </li></h3>
      }, this);
    }

    return rows;
},

toggle : function(){
console.log("============")
  console.log(this)

 $("#show").addClass('hidden')


},



  render: function() {
    
var parentz = this.props.location.query.id
var listid = this.props.location.query.listid;


    return (

<div>
  <form onSubmit={this.handleSubmitWord}>
   <div>
      <div className="container">


      </div>
      <div>
        </div>
        </div>
        <h2> Add new words to the list using this form:</h2>
          <div className = "form-group">
          <div className = "whatever">
          <input type="text" className="form-control" onChange={this.handleChange} id="vocabword"/>
          </div>
          <button type="submit" className="btn btn-success btn-lg submit">Submit</button>
        </div>
       </form>

    <h2>
    These are all the words in the {parentz} page:
    </h2>
  <div>
{this.SonOfListMaker()}
  </div>
</div>
    );
  }


//   componentDidUpdate : function(){

// this.forceUpdate()
// }
});

module.exports = Words;

