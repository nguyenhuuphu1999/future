import { Posts } from "@v1/posts/entities/post.entity";
import UserEntity from "@v1/users/schemas/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'text' })
    comment!: string

    @Column({ type: 'datetime' })
    createAt!: Date;

    @Column()
    userId!: number;

    @ManyToOne(() => UserEntity, (user) => user.comment)
    @JoinColumn({ name: 'userId' })
    user!: UserEntity;

    @Column()
    postId!: number;

    @ManyToOne(() => Posts, (post) => post.comment)
    @JoinColumn({ name: 'postId' })
    post!: Posts;

}
