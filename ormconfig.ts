import { DB } from 'config';
import { ConnectionOptions } from 'typeorm';
import { UserEntity } from './src/entities/user.entity'
import { CommentEntity } from './src/entities/comment.entity'

const typeOrmConfig: ConnectionOptions = {
    migrations: ['src/migrations/*.ts'],
    cli: { migrationsDir: 'migrations' },
    entities: [UserEntity, CommentEntity],
    migrationsRun: false,
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'test_nest_class_validator',
    synchronize: true,
};

export = typeOrmConfig;


