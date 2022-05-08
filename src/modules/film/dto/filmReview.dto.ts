import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class FilmReivew {
  @Field(() => String)
  filmId: string;
  @Field(() => String)
  comment: string;
}

