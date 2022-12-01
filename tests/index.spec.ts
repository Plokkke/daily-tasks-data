import { Sequelize } from 'sequelize';

import init from '../sources/index';

describe('sequilize intialization', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize('sqlite::memory:');
  });

  afterEach(async () => {
    await sequelize.close();
  });

  test('should load models in sequelize instance', () => {
    init(sequelize);
    expect(sequelize.models).toHaveProperty('Assignment');
    expect(sequelize.models).toHaveProperty('Member');
    expect(sequelize.models).toHaveProperty('Rating');
    expect(sequelize.models).toHaveProperty('Task');
  });

  test('should load associations in sequelize instance', () => {
    init(sequelize);

    expect(sequelize.models.Assignment.associations).toHaveProperty('rating');
    expect(sequelize.models.Assignment.associations.rating.target).toBe(sequelize.models.Rating);
    expect(sequelize.models.Rating.associations).toHaveProperty('assignments');
    expect(sequelize.models.Rating.associations.assignments.target).toBe(sequelize.models.Assignment);

    expect(sequelize.models.Member.associations).toHaveProperty('ratings');
    expect(sequelize.models.Member.associations.ratings.target).toBe(sequelize.models.Rating);
    expect(sequelize.models.Rating.associations).toHaveProperty('member');
    expect(sequelize.models.Rating.associations.member.target).toBe(sequelize.models.Member);

    expect(sequelize.models.Task.associations).toHaveProperty('ratings');
    expect(sequelize.models.Task.associations.ratings.target).toBe(sequelize.models.Rating);
    expect(sequelize.models.Rating.associations).toHaveProperty('task');
    expect(sequelize.models.Rating.associations.task.target).toBe(sequelize.models.Task);
  });
});