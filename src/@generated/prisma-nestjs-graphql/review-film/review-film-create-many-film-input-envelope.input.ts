import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmCreateManyFilmInput } from './review-film-create-many-film.input';

@InputType()
export class ReviewFilmCreateManyFilmInputEnvelope {

    @Field(() => [ReviewFilmCreateManyFilmInput], {nullable:false})
    data!: Array<ReviewFilmCreateManyFilmInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
