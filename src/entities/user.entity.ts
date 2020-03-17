import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    JoinColumn,
    OneToOne
} from 'typeorm';
import { CommentEntity, CommentDto } from './comment.entity';
import { Type, plainToClass, Exclude, Expose, } from "class-transformer";

@Entity({ name: 'user' })
export class UserEntity {

    @Exclude() // убрали это поле из класса entity
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    passwordHash: string;

    @OneToMany(type => CommentEntity, commentEntity => commentEntity.user)
    @JoinColumn()
    comments: CommentEntity[]

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, plainToClass(UserEntity, partial))
    }

}

// наследуем от UserEntity
export class UserDto extends UserEntity {


    // скрываем поле пароля
    @Exclude()
    passwordHash: string;

    // указываем тип элемента массива вложенного поля.
    @Type(() => CommentDto)
    comments: CommentDto[]

}


































































































