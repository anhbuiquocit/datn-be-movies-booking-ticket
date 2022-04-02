import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateManyFilmInput } from './showing-create-many-film.input';

@InputType()
export class ShowingCreateManyFilmInputEnvelope {

    @Field(() => [ShowingCreateManyFilmInput], {nullable:false})
    data!: Array<ShowingCreateManyFilmInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
