import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';

import SignUpDto from '@v1/auth/dto/sign-up.dto';
import UsersRepository from './users.repository';
import { UpdateResult } from 'typeorm/index';
import UserEntity from './schemas/user.entity';
import UpdateUserDto from './dto/update-user.dto';
import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
import { PaginatedUsersInterface } from '@interfaces/paginatedEntity.interface';
import jwt from 'jsonwebtoken';

@Injectable()
export default class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {
  }

  public async create(user: SignUpDto): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createUser:any = await this.usersRepository.create({
      ...user,
      password: hashedPassword,
    });
    delete createUser.password
    return createUser
  }

  public async signIn(email: string, password: string){
   const user = await this.usersRepository.getByEmail(email)
   if(user){
      const verifyPassword = await this.checkPassword(password, user.password)
     if(verifyPassword){
        const token = await this.createToken(user)
        return await token
     }else{
      throw new Error("Password Incorrect.")
     }
   }else{
      throw new Error("Email Incorrect.")
   }
  }

  public async getByEmail(email: string): Promise<UserEntity | undefined> {
    return this.usersRepository.getByEmail(email);
  }

  public async getVerifiedUserByEmail(email: string): Promise<UserEntity | undefined> {
    return this.usersRepository.getVerifiedUserByEmail(email);
  }

  public async getUnverifiedUserByEmail(email: string): Promise<UserEntity | undefined> {
    return this.usersRepository.getUnverifiedUserByEmail(email);
  }

  public async getById(id: number): Promise<UserEntity | undefined> {
    return this.usersRepository.getById(id);
  }

  public async getVerifiedUserById(id: number): Promise<UserEntity | undefined> {
    return this.usersRepository.getVerifiedUserById(id);
  }

  public async getUnverifiedUserById(id: number): Promise<UserEntity | undefined> {
    return this.usersRepository.getUnverifiedUserById(id);
  }

  update(id: number, data: UpdateUserDto): Promise<UpdateResult> {
    return this.usersRepository.updateById(id, data);
  }

  public async getAllVerifiedWithPagination(
    options: PaginationParamsInterface,
  ): Promise<PaginatedUsersInterface> {
    return this.usersRepository.getAllVerifiedWithPagination(options);
  }

  public async checkPassword(passwordCurrent: string, passwordDB: string){
    const passwordCompared = await bcrypt.compare(
      passwordCurrent,
      passwordDB,
    );
    return passwordCompared
  }

  public async createToken(dataInfoUser: any){
    const resultToken = await jwt.sign(
      { data: { dataInfoUser } },
      `${process.env.KEYTOKEN}_`,
      { algorithm: 'HS512', expiresIn: '7d' },
    );
    return await resultToken
  } 

  // public removePassword(data: [], itemRemove: string){
  //   data.map((item)=>{
  //     delete item
  //   })
  // }
}
