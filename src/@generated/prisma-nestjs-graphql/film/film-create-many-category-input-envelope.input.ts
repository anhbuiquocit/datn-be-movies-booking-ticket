import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateManyCategoryInput } from './film-create-many-category.input';

@InputType()
export class FilmCreateManyCategoryInputEnvelope {

    @Field(() => [FilmCreateManyCategoryInput], {nullable:false})
    data!: Array<FilmCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
