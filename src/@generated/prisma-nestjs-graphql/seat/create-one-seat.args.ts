import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatCreateInput } from './seat-create.input';

@ArgsType()
export class CreateOneSeatArgs {

    @Field(() => SeatCreateInput, {nullable:false})
    data!: SeatCreateInput;
}
