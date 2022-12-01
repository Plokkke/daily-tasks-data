import { Sequelize, DataTypes } from "sequelize";

export function init(sequelize: Sequelize) {
  sequelize.define('Assignment', {
    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'PENDING',
    },
  }, {
    tableName: 'assignments',
  });
}

export function associate(sequelize: Sequelize): void {
  const { Assignment, Rating } = sequelize.models;

  Assignment.belongsTo(Rating, { as: 'rating', foreignKey: 'ratingId', onDelete: 'CASCADE' });
}