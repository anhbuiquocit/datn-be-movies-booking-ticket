import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateManyRoomInput } from './showing-create-many-room.input';

@InputType()
export class ShowingCreateManyRoomInputEnvelope {

    @Field(() => [ShowingCreateManyRoomInput], {nullable:false})
    data!: Array<ShowingCreateManyRoomInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
