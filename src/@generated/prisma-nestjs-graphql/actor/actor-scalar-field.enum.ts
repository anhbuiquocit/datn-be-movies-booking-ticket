import { registerEnumType } from '@nestjs/graphql';

export enum ActorScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    name = "name",
    birthday = "birthday",
    description = "description",
    image = "image"
}


registerEnumType(ActorScalarFieldEnum, { name: 'ActorScalarFieldEnum', description: undefined })
