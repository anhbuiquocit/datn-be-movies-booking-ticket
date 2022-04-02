import { registerEnumType } from '@nestjs/graphql';

export enum ClusterCinemaScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    name = "name",
    phone = "phone"
}


registerEnumType(ClusterCinemaScalarFieldEnum, { name: 'ClusterCinemaScalarFieldEnum', description: undefined })
