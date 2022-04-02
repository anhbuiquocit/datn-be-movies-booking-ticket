import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatUpdateInput } from './seat-update.input';
import { SeatWhereUniqueInput } from './seat-where-unique.input';

@ArgsType()
export class UpdateOneSeatArgs {

    @Field(() => SeatUpdateInput, {nullable:false})
    data!: SeatUpdateInput;

    @Field(() => SeatWhereUniqueInput, {nullable:false})
    where!: SeatWhereUniqueInput;
}
