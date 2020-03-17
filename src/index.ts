import {UserEntity} from './entities/user.entity';
import { Type, plainToClass, Exclude, Expose, serialize } from "class-transformer";

// const user = new UserEntity({id: 1, passwordHash: '123123', })
// console.log(serialize(user))