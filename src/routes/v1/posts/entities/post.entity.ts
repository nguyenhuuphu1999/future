import { Comment } from "@v1/comments/entities/comment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'text'})
    post!: string;

    @Column({ type: 'datetime'})
    createAt!: Date;

    @OneToMany(() => Comment, (comment) => comment.post)
    comment!: Comment;
}
