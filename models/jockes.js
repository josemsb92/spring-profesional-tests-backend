"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jockes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  jockes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      type: DataTypes.STRING,
      setup: DataTypes.STRING,
      punchline: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "Jockes",
      timestamps: false,
    }
  );

  return jockes;
};
