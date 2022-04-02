import { registerEnumType } from '@nestjs/graphql';

export enum CinemaScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    name = "name",
    address = "address",
    phone = "phone",
    ClusterCinemaId = "ClusterCinemaId"
}


registerEnumType(CinemaScalarFieldEnum, { name: 'CinemaScalarFieldEnum', description: undefined })
