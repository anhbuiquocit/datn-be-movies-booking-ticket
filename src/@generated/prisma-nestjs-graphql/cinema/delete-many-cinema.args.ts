import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaWhereInput } from './cinema-where.input';

@ArgsType()
export class DeleteManyCinemaArgs {

    @Field(() => CinemaWhereInput, {nullable:true})
    where?: CinemaWhereInput;
}
