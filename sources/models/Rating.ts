import { Sequelize, DataTypes } from "sequelize";

export function init(sequelize: Sequelize) {
  sequelize.define('Rating', {
    Cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'ratings',
  });
}

export function associate(sequelize: Sequelize): void {
  const { Assignment, Member, Rating, Task } = sequelize.models;

  Rating.belongsTo(Task, { as: 'task', foreignKey: 'taskId', onDelete: 'CASCADE' });
  Rating.belongsTo(Member, { as: 'member', foreignKey: 'taskId', onDelete: 'CASCADE' });

  Rating.hasMany(Assignment, { as: 'assignments', foreignKey: 'ratingId', onDelete: 'CASCADE' });
}