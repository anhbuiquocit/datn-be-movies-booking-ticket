import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';

@ArgsType()
export class FindUniqueCinemaArgs {

    @Field(() => CinemaWhereUniqueInput, {nullable:false})
    where!: CinemaWhereUniqueInput;
}
