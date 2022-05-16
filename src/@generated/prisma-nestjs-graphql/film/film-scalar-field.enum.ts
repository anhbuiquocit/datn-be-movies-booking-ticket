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
    time = "time",
    image = "image",
    imageDescription1 = "imageDescription1",
    imageDescription2 = "imageDescription2",
    imageDescription3 = "imageDescription3",
    categoryId = "categoryId"
}


registerEnumType(FilmScalarFieldEnum, { name: 'FilmScalarFieldEnum', description: undefined })
