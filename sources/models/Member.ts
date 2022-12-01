import { Sequelize, DataTypes } from "sequelize";

export function init(sequelize: Sequelize) {
  sequelize.define('Member', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stamina: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'members',
  });
}

export function associate(sequelize: Sequelize): void {
  const { Member, Rating } = sequelize.models;

  Member.hasMany(Rating, { as: 'ratings', foreignKey: 'memberId', onDelete: 'CASCADE' });
}