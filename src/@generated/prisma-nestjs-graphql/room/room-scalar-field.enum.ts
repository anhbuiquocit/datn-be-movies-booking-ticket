import { registerEnumType } from '@nestjs/graphql';

export enum RoomScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    name = "name",
    CinemaId = "CinemaId"
}


registerEnumType(RoomScalarFieldEnum, { name: 'RoomScalarFieldEnum', description: undefined })
