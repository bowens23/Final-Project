
import axios from "axios";


var skript = {


createPost: function(word){

	console.log(word)


axios.post('api/posts', { word }) 
  .then(function(response){
    console.log('saved successfully with this as word: ' + word)
  });  
},

showAllskript: function(){

var lists = axios.get('api/getLists');
console.log("I'm lists: "+lists);
  return lists;
},


//the vocabword in the parameters below is from the id in the form
createWordGetSynonym: function(vocabword, WordId){


console.log(" in the first function this is the vocabword: "+vocabword+" and this is the WordId: "+WordId)

console.log("this is the vocab word getting passed: "+vocabword)

return axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170923T172713Z.259527d83c258036.a1780acc39e04681355720d5abb2f84f66da5502&text='+vocabword+'&lang=en-fr')
	.then(function(response){
	var vocabwordsynonym = response.data.text[0]

	 console.log ("in the second function this is the vocab word: "+ vocabword + " and this is the synonym: " +vocabwordsynonym + "and this is the id: "+WordId)


  return axios.post('api/vocabwords', {vocabword, vocabwordsynonym, WordId }) 
  ; 

})


},


showAllWordsInList: function(WordId)
{

return axios.get('api/getvocabwords?WordId='+WordId).then(function(response){

  return response
})

},

deleteWord : function(id){

  return axios.post("/api/deleteword/"+id).then(function(response){
    return response;
  });
},


deleteList : function(id){

  return axios.post("/api/deletelist/"+id).then(function(response){
    return response;
  });
}

};

module.exports = skript;



//yandex key: trnsl.1.1.20170923T172713Z.259527d83c258036.a1780acc39e04681355720d5abb2f84f66da5502

//https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170923T172713Z.259527d83c258036.a1780acc39e04681355720d5abb2f84f66da5502&text=yes&lang=en-fr

// var someFunction = function(x) {
//   return x;
// }

// var someFunction2 = (x) => {
//   return x;
// }