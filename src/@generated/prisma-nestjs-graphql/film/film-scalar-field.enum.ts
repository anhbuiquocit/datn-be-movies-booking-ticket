import { registerEnumType } from '@nestjs/graphql';

export enum FilmScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    trailler = "trailler",
    name = "name",
    description = "description",
    director = "director",
    actor = "actor",
    time = "time"
}


registerEnumType(FilmScalarFieldEnum, { name: 'FilmScalarFieldEnum', description: undefined })
