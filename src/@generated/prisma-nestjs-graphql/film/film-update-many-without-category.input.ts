import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutCategoryInput } from './film-create-without-category.input';
import { FilmCreateOrConnectWithoutCategoryInput } from './film-create-or-connect-without-category.input';
import { FilmUpsertWithWhereUniqueWithoutCategoryInput } from './film-upsert-with-where-unique-without-category.input';
import { FilmCreateManyCategoryInputEnvelope } from './film-create-many-category-input-envelope.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithWhereUniqueWithoutCategoryInput } from './film-update-with-where-unique-without-category.input';
import { FilmUpdateManyWithWhereWithoutCategoryInput } from './film-update-many-with-where-without-category.input';
import { FilmScalarWhereInput } from './film-scalar-where.input';

@InputType()
export class FilmUpdateManyWithoutCategoryInput {

    @Field(() => [FilmCreateWithoutCategoryInput], {nullable:true})
    create?: Array<FilmCreateWithoutCategoryInput>;

    @Field(() => [FilmCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<FilmCreateOrConnectWithoutCategoryInput>;

    @Field(() => [FilmUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    upsert?: Array<FilmUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => FilmCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: FilmCreateManyCategoryInputEnvelope;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    set?: Array<FilmWhereUniqueInput>;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    disconnect?: Array<FilmWhereUniqueInput>;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    delete?: Array<FilmWhereUniqueInput>;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    connect?: Array<FilmWhereUniqueInput>;

    @Field(() => [FilmUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    update?: Array<FilmUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [FilmUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    updateMany?: Array<FilmUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [FilmScalarWhereInput], {nullable:true})
    deleteMany?: Array<FilmScalarWhereInput>;
}
