import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createAt = "createAt",
    updateAt = "updateAt",
    deleteAt = "deleteAt",
    firstname = "firstname",
    lastname = "lastname",
    birthday = "birthday",
    address = "address",
    email = "email",
    password = "password",
    username = "username",
    active = "active",
    point = "point",
    phone = "phone",
    role = "role"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
