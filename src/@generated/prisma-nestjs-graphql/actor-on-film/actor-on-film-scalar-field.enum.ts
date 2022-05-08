import { registerEnumType } from '@nestjs/graphql';

export enum ActorOnFilmScalarFieldEnum {
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    actorId = "actorId",
    filmId = "filmId"
}


registerEnumType(ActorOnFilmScalarFieldEnum, { name: 'ActorOnFilmScalarFieldEnum', description: undefined })
