import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutCategoryInput } from './film-create-without-category.input';
import { FilmCreateOrConnectWithoutCategoryInput } from './film-create-or-connect-without-category.input';
import { FilmCreateManyCategoryInputEnvelope } from './film-create-many-category-input-envelope.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@InputType()
export class FilmCreateNestedManyWithoutCategoryInput {

    @Field(() => [FilmCreateWithoutCategoryInput], {nullable:true})
    create?: Array<FilmCreateWithoutCategoryInput>;

    @Field(() => [FilmCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<FilmCreateOrConnectWithoutCategoryInput>;

    @Field(() => FilmCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: FilmCreateManyCategoryInputEnvelope;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    connect?: Array<FilmWhereUniqueInput>;
}
