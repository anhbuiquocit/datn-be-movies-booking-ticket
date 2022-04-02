import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { SeatCreateInput } from './seat-create.input';
import { SeatUpdateInput } from './seat-update.input';

@ArgsType()
export class UpsertOneSeatArgs {

    @Field(() => SeatWhereUniqueInput, {nullable:false})
    where!: SeatWhereUniqueInput;

    @Field(() => SeatCreateInput, {nullable:false})
    create!: SeatCreateInput;

    @Field(() => SeatUpdateInput, {nullable:false})
    update!: SeatUpdateInput;
}
