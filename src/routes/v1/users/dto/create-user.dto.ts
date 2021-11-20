import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

import SignUpDto from '@v1/auth/dto/sign-up.dto';
import { RolesEnum } from '@decorators/roles.decorator';

export default class CreateUserDto{
    readonly id!: number;

    readonly password!: string ;
   
    readonly email!: string ;
   
    readonly verified!: boolean;
   
    readonly fullName!: string;

    readonly role!: RolesEnum;
}




 