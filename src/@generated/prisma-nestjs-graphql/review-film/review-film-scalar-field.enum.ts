import { registerEnumType } from '@nestjs/graphql';

export enum ReviewFilmScalarFieldEnum {
    id = "id",
    userId = "userId",
    filmId = "filmId",
    comment = "comment"
}


registerEnumType(ReviewFilmScalarFieldEnum, { name: 'ReviewFilmScalarFieldEnum', description: undefined })
