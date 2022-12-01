import { Sequelize, DataTypes } from "sequelize";

export function init(sequelize: Sequelize) {
  sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'tasks',
  });
}

export function associate(sequelize: Sequelize): void {
  const { Rating, Task } = sequelize.models;

  Task.hasMany(Rating, { as: 'ratings', foreignKey: 'taskId', onDelete: 'CASCADE' });
}