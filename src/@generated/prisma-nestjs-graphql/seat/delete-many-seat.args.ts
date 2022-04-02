import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatWhereInput } from './seat-where.input';

@ArgsType()
export class DeleteManySeatArgs {

    @Field(() => SeatWhereInput, {nullable:true})
    where?: SeatWhereInput;
}
