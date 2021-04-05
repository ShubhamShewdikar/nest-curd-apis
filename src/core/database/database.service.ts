import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/user-management/user.entity';

import { SEQUELIZE, DEVELOPMENT } from '../constants';

import { databaseConfig } from './database.config'



export const databaseService = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config: any;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        // case PRODUCTION:
        //    config = databaseConfig.production;
        //    break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
    },
}];
