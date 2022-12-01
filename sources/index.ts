import _ from 'lodash';
import { Sequelize } from 'sequelize';

import * as models from './models';

export default async function (sequelize: Sequelize) {
  _(models)
    .filter(model => _.isFunction(model.init))
    .forEach(model => model.init(sequelize))
    .filter(model => _.isFunction(model.associate))
    .forEach(model => model.associate(sequelize));
}