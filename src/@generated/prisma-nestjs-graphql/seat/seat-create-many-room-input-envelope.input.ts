import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatCreateManyRoomInput } from './seat-create-many-room.input';

@InputType()
export class SeatCreateManyRoomInputEnvelope {

    @Field(() => [SeatCreateManyRoomInput], {nullable:false})
    data!: Array<SeatCreateManyRoomInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
