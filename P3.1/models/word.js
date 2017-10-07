// module.exports = function(sequelize, DataTypes) {
//   var Word = sequelize.define("Word", {
//     word: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     }
//   });
//   return Word;
// };


module.exports = function(sequelize, DataTypes) {
  var Word = sequelize.define("Word", {
    // Giving the Author model a name of type STRING
    word: DataTypes.STRING
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          Word.hasMany(models.wordword, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Word;
};
//whatever we return will be the name of the database.  
//it's not the name of the file that sequelize turns into the table but the name of the model - "Word" in this case.