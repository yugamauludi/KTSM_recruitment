'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PDF extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PDF.belongsTo( models.User, {foreignKey: 'userId'} )
    }
  }
  PDF.init({
    title: DataTypes.STRING,
    link: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PDF',
  });
  return PDF;
};