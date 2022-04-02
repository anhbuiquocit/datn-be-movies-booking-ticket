import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { CinemaCreateInput } from './cinema-create.input';
import { CinemaUpdateInput } from './cinema-update.input';

@ArgsType()
export class UpsertOneCinemaArgs {

    @Field(() => CinemaWhereUniqueInput, {nullable:false})
    where!: CinemaWhereUniqueInput;

    @Field(() => CinemaCreateInput, {nullable:false})
    create!: CinemaCreateInput;

    @Field(() => CinemaUpdateInput, {nullable:false})
    update!: CinemaUpdateInput;
}
