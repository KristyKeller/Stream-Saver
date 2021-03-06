module.exports = function(sequelize, DataTypes) {
    var watchList = sequelize.define("watchList", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      watched: {
        type: DataTypes.STRING,
        
      },
      rating: {
        type: DataTypes.INTEGER

      }, 
      poster: {
        type: DataTypes.STRING

      },
      date: {
       type:  DataTypes.DATEONLY

      },
      media_type: {
        type: DataTypes.BOOLEAN
      },
      stream_url: {
        type: DataTypes.STRING
      }
    });

    watchList.associate = function(models){
        watchList.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }

        });

    };
    return watchList;

};