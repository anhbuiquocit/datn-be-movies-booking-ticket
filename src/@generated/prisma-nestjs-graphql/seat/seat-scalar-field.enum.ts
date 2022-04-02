import { registerEnumType } from '@nestjs/graphql';

export enum SeatScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    name = "name",
    position = "position",
    RoomId = "RoomId"
}


registerEnumType(SeatScalarFieldEnum, { name: 'SeatScalarFieldEnum', description: undefined })
