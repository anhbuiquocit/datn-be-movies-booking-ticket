import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createAt = "createAt",
    updateAt = "updateAt",
    deleteAt = "deleteAt",
    firstname = "firstname",
    lastname = "lastname",
    age = "age",
    address = "address",
    email = "email",
    password = "password",
    username = "username",
    active = "active"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
