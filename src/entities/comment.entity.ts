import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Type, plainToClass, Exclude, Expose } from "class-transformer";

import { UserEntity } from './user.entity';

@Entity({ name: 'comment' })
export class CommentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'char', length: 19 }) // max card number according with https://en.wikipedia.org/wiki/Payment_card_number
    text: string;

    @ManyToOne(type => UserEntity, confirmationEmail => confirmationEmail.comments)
    user: UserEntity

}

// наследуем от UserEntity
export class CommentDto extends CommentEntity {

    // скрываем поле id
    @Exclude()
    id: number;
}
