import { Exclude, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
import { RolesEnum } from '@decorators/roles.decorator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class UserResponseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  role: RolesEnum = RolesEnum.user;

  verified: boolean = false;

  email!: string;

  @Exclude()
  password: string = '';
}

export class AllUsersResponseEntity {
  @ValidateNested({ each: true })
  @Type(() => UserResponseEntity)
  data?: [] = []

  collectionName?: string = '';

  options?: {
    location: string,
    paginationParams: PaginationParamsInterface,
    totalCount: number,
  }
}
