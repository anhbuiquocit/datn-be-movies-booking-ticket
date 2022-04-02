import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaUpdateInput } from './cinema-update.input';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';

@ArgsType()
export class UpdateOneCinemaArgs {

    @Field(() => CinemaUpdateInput, {nullable:false})
    data!: CinemaUpdateInput;

    @Field(() => CinemaWhereUniqueInput, {nullable:false})
    where!: CinemaWhereUniqueInput;
}
