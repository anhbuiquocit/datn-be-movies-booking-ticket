import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatCreateManyInput } from './seat-create-many.input';

@ArgsType()
export class CreateManySeatArgs {

    @Field(() => [SeatCreateManyInput], {nullable:false})
    data!: Array<SeatCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
