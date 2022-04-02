import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatWhereUniqueInput } from './seat-where-unique.input';

@ArgsType()
export class DeleteOneSeatArgs {

    @Field(() => SeatWhereUniqueInput, {nullable:false})
    where!: SeatWhereUniqueInput;
}
