import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatUpdateManyMutationInput } from './seat-update-many-mutation.input';
import { SeatWhereInput } from './seat-where.input';

@ArgsType()
export class UpdateManySeatArgs {

    @Field(() => SeatUpdateManyMutationInput, {nullable:false})
    data!: SeatUpdateManyMutationInput;

    @Field(() => SeatWhereInput, {nullable:true})
    where?: SeatWhereInput;
}
