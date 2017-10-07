module.exports = function(sequelize, DataTypes) {
  var wordword = sequelize.define("wordword", {
    vocabword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    vocabwordsynonym: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
    ,

      WordId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  }
  ,

    {
      // We're saying that we want our word to have wordwords
      classMethods: {
        associate: function(models) {
          // A word (foreignKey) is required or a wordword can't be made
          wordword.belongsTo(models.Word, {
            foreignKey: {allowNull: false}
          });
        }
      }
    }
  );
  return wordword;
};
