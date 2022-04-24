import { registerEnumType } from '@nestjs/graphql';

export enum AdminScalarFieldEnum {
    id = "id",
    createAt = "createAt",
    updateAt = "updateAt",
    deleteAt = "deleteAt",
    firstname = "firstname",
    lastname = "lastname",
    birthday = "birthday",
    address = "address",
    email = "email",
    image = "image",
    password = "password",
    username = "username",
    phone = "phone",
    role = "role"
}


registerEnumType(AdminScalarFieldEnum, { name: 'AdminScalarFieldEnum', description: undefined })
